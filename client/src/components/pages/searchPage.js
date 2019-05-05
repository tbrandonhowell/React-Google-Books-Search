import React, {Component} from 'react';
import axios from 'axios';
import BookDiv from "../bookDiv";
import Header from "../header";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import apiKey from "../../key.js"

class SearchPage extends Component {

  state = {
    searchTerm: "",
    googleResults: [],
  }

  // from: https://stackoverflow.com/questions/43441856/reactjs-how-to-scroll-to-an-element
  constructor(props){
    super(props)
    this.myRef = React.createRef()
  }

  searchBooks = (searchTitle, event) => {
    event.preventDefault();
    console.log("search term:");
    console.log(searchTitle);
    let newGoogleResultsState = [];
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTitle + "&key=" + apiKey)
      .then(response => {
        console.log(response.data);
        response.data.items.forEach( (element) => {
          let newObject = {
            title: (element.volumeInfo.title || "No Title Provided"),
            snippet: ((element.searchInfo && element.searchInfo.textSnippet) || "No Snippet Provided"),
            author: ((element.volumeInfo.authors && element.volumeInfo.authors[0]) || "No Author Provided"),
            image: ((element.volumeInfo.imageLinks && element.volumeInfo.imageLinks.thumbnail) || "https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png"),
            link: (element.volumeInfo.infoLink || ("https://www.google.com/search?tbm=bks&q=" + element.searchInfo.title) ),
            synopsis: (element.volumeInfo.description || "No Synopsis Provided")
          };
          newGoogleResultsState.push(newObject);
          // console.log("\n\n");
          // console.log(newObject);
          // console.log("\n\n");
        });
        // console.log(newGoogleResultsState);
        this.setState({googleResults: newGoogleResultsState},response => {
          console.log(this.state.googleResults);
          // this.scrollToRef();
        })
      })
      .catch(err => {
        console.log(err);
      })
  };

  getSearchTerm = event => {
    console.log("getSearchTerm() triggered");
    const term = event.target.value;
    this.setState({searchTerm: term},function(){
      console.log("this.state.searchTerm:");
      console.log(this.state.searchTerm);
    });
  }

  addBook = (index) => {
    console.log("addBook() for arrayIndex[" + index + "] called");
    let book = this.state.googleResults[index];
    console.log(book);
    axios.post("http://localhost:3001/api/books", {book})
      .then(response => {
        console.log("response.data:");
        console.log(response.data);
      })
  }

  scrollToRef = () => {
    // window.scrollTo(0, this.myRef.current.offsetTop);
    // scroll.scrollTo(this.myRef.current);
    scroller.scrollTo('myScrollToElement', {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: 'ContainerElementID',
      offset: 50, // Scrolls to element + 50 pixels down the page
    })
  }

  componentDidMount() {
    // this.searchBooks("the moon is a harsh mistress");
    // this.setState({searchTerm: "transformers"});
  };

  render() {
    return(
      <div className="container">

            <Header/>
            <div className="row mt-4">
                <div className="col-md-1"></div>
                <div className="col-md-10 border p-4">
                    <h2>Book Search</h2>
                    <form onSubmit={(event) => this.searchBooks(this.state.searchTerm,event)}>
                      <input 
                        type="text" 
                        className="form-control" 
                        onChange={this.getSearchTerm}
                      />
                      <button 
                        type="submit" 
                        className="btn btn-success mt-3 float-right"
                        // onClick={() => this.searchBooks(this.state.searchTerm)}
                      >Search</button>
                    </form>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row mt-4">
                <div className="col-md-1"></div>
                <div className="col-md-10 border p-4">
                    <Element name="myScrollToElement"></Element>
                    <h2 ref={this.myRef}>Results</h2>

                    {
                      this.state.googleResults.map((item, index) => (
                        <BookDiv
                          key={index}
                          title={item.title}
                          link={item.link}
                          snippet={item.snippet}
                          author={item.author}
                          image={item.image}
                          synopsis={item.synopsis}
                          search="true"
                          arrayIndex = {index}
                          addBook = {this.addBook}
                        />
                      ))
                    }

                </div>
                <div className="col-md-1"></div>
            </div>

        </div>
    )
  }

}

export default SearchPage;