import React from "react";
import SearchBtns from "../components/searchBtns";
import SavedBtns from "../components/savedBtns";

function BookDiv (props) {

    return(

        <div className="container mt-3">
        <div className="row">
            <div className="col-md-12 border p-3">
                {props.search ? 
                    (<SearchBtns 
                        link={props.link} 
                        arrayIndex={props.arrayIndex}
                        addBook = {props.addBook}
                    />)
                     : 
                    (<SavedBtns 
                        link={props.link}  
                        Id={props.Id}
                        deleteBook={props.deleteBook}
                    />) }
                <h3>{props.title}</h3>
                <h5>{props.snippet}</h5>
                <p>Written by {props.author}</p>
                <img src={props.image} className="float-left mr-3 mb-3" alt={props.title}/>
                <p>{props.synopsis}</p>
            </div>
        </div>
        </div>

    )

}

export default BookDiv;






