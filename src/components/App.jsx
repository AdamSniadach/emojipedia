import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";


//step 2 create funcion to display cards
function CardCreate(props) {
  return (
    <Card
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
//step3 add map to show all cards 
      <dl className="dictionary">{emojipedia.map(CardCreate)};</dl>
    </div>
  );
}

export default App;
