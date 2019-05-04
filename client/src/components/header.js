import React from "react";
import {Link} from "react-router-dom";

function Header (props) {

    return(

        <div>

        <nav className="navbar navbar-expand-md bg-primary">
            <Link to="/" className="navbar-brand text-white">RGBS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white">Search Books</Link>
                </li>
                <li className="nav-item">
                    <Link to="saved" className="nav-link text-white">Saved Books</Link>
                </li>
            </ul>
            </div>
        </nav>

        <div className="row mt-4">
            <div className="col-md-1"></div>
            <div className="col-md-10 text-center bg-light p-5">
                <h1 className="text-primary">React Google Books Search</h1>
                <p>Search for and Save Books of Interest</p>
            </div>
            <div className="col-md-1"></div>
        </div>

        </div>

    )

}

export default Header;