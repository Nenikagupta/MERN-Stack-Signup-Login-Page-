import React from "react";

function Header(props){


    return(
      <div>
        <header>
          <div className="first">
            <p><i className="fas fa-smile-beam fa-1x"></i> Welcome Welcome!!</p>
          </div>
          <div className="second">
            <div className="userphoto"> <i className="fas fa-user-circle fa-3x"></i></div>
          <div className="username">
            <p>{props.username} <i className="fas fa-angle-down"></i></p>
            <span className="tooltiptext">
              <a href="/logout"><i className="fas fa-sign-out-alt fa-1x"></i> Logout</a>
            </span>
          </div>
          </div>
        </header>
      </div>
    );
}

export default Header;
