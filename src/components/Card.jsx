import React from "react";
// step1 : create card 
function Card(props) {
  return (
    <div className="term">
      <dt>
        <span>{props.name}</span>
      </dt>
      <span className="emoji" role="img" aria-label={props.name}>
        {props.emoji}
      </span>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Card;
