import React from 'react';

function Button(props){

    return(
      <div className="button">
        <a href={props.href}>{props.text}</a>
      </div>
    )
}

export default Button;
