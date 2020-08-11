import React from "react";

function NavBar({searchEmployees}) {
    return (
        <nav className="navbar">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <div className="searchComponent">
                    <form className="form-inline mr-auto">
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Search by Name" 
                            aria-label="Search by Name"
                            onChange={ event => searchEmployees(event)}
                        />
                        <button className="btn" type="submit">
                            Search 
                        </button>
                    </form>
            </div>
                </div>
        </nav>
    );
}
export default NavBar;

