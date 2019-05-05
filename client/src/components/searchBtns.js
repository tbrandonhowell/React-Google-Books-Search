import React from "react";

function SearchBtns (props) {

    return (
        
        <div>
            <a className="btn btn-primary float-right ml-2" href={props.link} role="button">View</a>
            <button 
                className="btn btn-primary float-right ml-2 saveBtn"
                onClick={() => props.addBook(props.arrayIndex)}
            >Save</button>
        </div>
        
    )

}

export default SearchBtns;

