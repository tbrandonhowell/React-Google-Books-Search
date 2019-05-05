import React from "react";

function SavedBtns (props) {

    return (
        
        <div>
            <button 
                className="btn btn-danger float-right ml-2 deleteBtn"
                onClick={() => props.deleteBook(props.Id)}
            >Delete</button>
            <a className="btn btn-primary float-right ml-2" href={props.link} role="button">View</a>
        </div>
        
    )

}

export default SavedBtns;