import React, {Component} from 'react';
import axios from 'axios';
// import axios from 'axios';
import BookDiv from "../bookDiv";
import Header from "../header";


class SavedPage extends Component {

  state = {
    savedBooksPull: []
    // TODO: need to define state
  }

  // pullBooks = () => {
  //   console.log("pullBooks() called");
  //   let newSavedBooksPull = [];
  //   axios.get("http://localhost:3001/api/books")
  //     .then(response => {
  //       console.log("response.data:");
  //       console.log(response.data);
  //       response.data.forEach( (element) => {
  //         let newObject = {
  //           title: (element.title || "No Title Provided"),
  //           snippet: (element.snippet || "No Snippet Provided"),
  //           author: (element.author || "No Author Provided"),
  //           image: (element.image || "https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png"),
  //           link: (element.link || ("https://www.google.com/search?tbm=bks&q=" + element.title) ),
  //           synopsis: (element.synopsis || "No Synopsis Provided")
  //         };
  //         newSavedBooksPull.push(newObject);
  //         // console.log("\n\n");
  //         // console.log(newObject);
  //         // console.log("\n\n");
  //       });
  //       // console.log(newGoogleResultsState);
  //       this.setState({savedBooksPull: newSavedBooksPull},response => {
  //         console.log("this.state.savedBooksPull:")
  //         console.log(this.state.savedBooksPull);
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // };

  pullBooks2 = () => {
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
    // TODO: add the api call to our database
    this.pullBooks2();
  };

  render() {
    return(
      <div className="container">

            <Header/>
            
            <div className="row mt-4">
                <div className="col-md-1"></div>
                <div className="col-md-10 border p-4">
                    <h2>Saved Books</h2>

                    {
                      this.state.savedBooksPull.map((item, index) => (
                        <BookDiv
                          key={index}
                          title={item.title}
                          link={item.link}
                          snippet={item.snippet}
                          author={item.author}
                          image={item.image}
                          synopsis={item.synopsis}
                          arrayId={item.index}
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

export default SavedPage;