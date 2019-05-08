import React, {Component} from 'react';
import axios from 'axios';
// import axios from 'axios';
import BookDiv from "../bookDiv";
import Header from "../header";


class SavedPage extends Component {

  state = {
    savedBooksPull: []
  }

  pullBooks2 = () => {
    console.log("pullBooks() called");
    axios.get("/api/books") // fix all these like this one.
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

  deleteBook = (toDelete) => {
    console.log("deleteBook() for _id: " + toDelete + " called");
    let id = toDelete;
    console.log({id});
    axios.post("/api/books/delete", {id})
      .then(response => {
        console.log("response.data:");
        console.log(response.data);
        this.pullBooks2();
      })
  }

  componentDidMount() {
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
                          Id={item._id}
                          deleteBook={this.deleteBook}
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