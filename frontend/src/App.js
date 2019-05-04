import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import BookDiv from "./components/bookDiv";
import Header from "./components/header";

let apiKey = "AIzaSyAwSXsSa6GrLDO2VRl37azzYfXI8Ck59Ls";



class App extends Component {

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
    let newGoogleResultsState = [];
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTitle + "&key=" + apiKey)
      .then(response => {
        // console.log(response.data);
        response.data.items.forEach( (element) => {
          let newObject = {
            title: element.volumeInfo.title,
            snippet: element.searchInfo.textSnippet,
            author: element.volumeInfo.authors[0],
            image: element.volumeInfo.imageLinks.thumbnail,
            link: element.volumeInfo.infoLink,
            synopsis: element.volumeInfo.description
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
    const term = event.target.value;
    this.setState({searchTerm: term});
  }

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  componentDidMount() {
    // this.searchBooks("the moon is a harsh mistress");
    this.setState({searchTerm: "cheese"})
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
                      this.state.googleResults.map(item => (
                        <BookDiv
                          title={item.title}
                          link={item.link}
                          snippet={item.snippet}
                          author={item.author}
                          image={item.image}
                          synopsis={item.synopsis}
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

export default App;
