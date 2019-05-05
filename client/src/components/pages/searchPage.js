import React, {Component} from 'react';
import axios from 'axios';
import BookDiv from "../bookDiv";
import Header from "../header";

let apiKey = "AIzaSyAwSXsSa6GrLDO2VRl37azzYfXI8Ck59Ls";



class SearchPage extends Component {

  // AIzaSyAwSXsSa6GrLDO2VRl37azzYfXI8Ck59Ls
  // Use this key in your application by passing it with the key=API_KEY parameter.
  // https://www.googleapis.com/books/v1/volumes?q=search+terms
  // https://www.googleapis.com/books/v1/volumes?q=the moon is a harsh mistress&key=AIzaSyAwSXsSa6GrLDO2VRl37azzYfXI8Ck59Ls
  // looks like you get ten results

  

  state = {
    searchTerm: "",
    googleResults: [],
  }

  searchBooks = (searchTitle) => {
    console.log("search term:");
    console.log(searchTitle);
    // TODO: put latest search term in local storage for use on page load
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
    // TODO: give some sort of indication when a book is saved
    console.log("addBook() for arrayIndex[" + index + "] called");
    let book = this.state.googleResults[index];
    console.log(book);
    axios.post("http://localhost:3001/api/books", {book})
      .then(response => {
        console.log("response.data:");
        console.log(response.data);
      })
  }


  DELETETHIS = () => {
    console.log("pullBooks() called");
    axios.get("http://localhost:3001/api/books")
      .then(response => {
        console.log("response.data:");
        console.log(response.data);
        this.setState({savedBooksPull: response.data},response => {
          console.log("this.state.savedBooksPull:")
          console.log(this.state.savedBooksPull);
        })
      })
      .catch(err => {
        console.log(err);
      })
  };

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
                    <input 
                      type="text" 
                      className="form-control" 
                      onChange={this.getSearchTerm}
                    />
                    <button 
                      type="button" 
                      className="btn btn-success mt-3 float-right"
                      onClick={() => this.searchBooks(this.state.searchTerm)}
                    >Search</button>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row mt-4">
                <div className="col-md-1"></div>
                <div className="col-md-10 border p-4">
                    <h2>Results</h2>

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