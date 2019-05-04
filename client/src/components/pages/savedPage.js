import React, {Component} from 'react';
// import axios from 'axios';
import BookDiv from "../bookDiv";
import Header from "../header";


class SavedPage extends Component {

  state = {
    savedBooksPull: []
    // TODO: need to define state
  }

  componentDidMount() {
    // TODO: add the api call to our database
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
                      this.state.savedBooksPull.map(item => (
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

export default SavedPage;