import React from 'react';
import { Link} from "react-router-dom";
function Buttons(props) {
  console.log(props.path, "hje");

  return (
    <button type="button" onClick={props.handleClick}>
    <Link className="menu-link" to={props.path}>{props.buttonName}</Link> 
    </button>
  );
}

export default Buttons;