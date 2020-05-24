import React from "react";
import "./style.css";

function Dropdown(props) {
    return (
        <div>
            <div className="dropdown">
                <i className="fas fa-ellipsis-h" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;