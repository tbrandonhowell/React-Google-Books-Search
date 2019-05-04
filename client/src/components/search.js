import React from "react";

function Search (props) {

    return(

        <div className="row mt-4">
            <div className="col-md-1"></div>
            <div className="col-md-10 border p-4">
                <h2>Book Search</h2>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={props.getSearchTerm()}
                />
                <button 
                    type="button" 
                    className="btn btn-success mt-3 float-right"
                    onClick={() => props.searchBooks(props.searchTerm)}
                >Search</button>
            </div>
            <div className="col-md-1"></div>
        </div>

    )

}

export default Search