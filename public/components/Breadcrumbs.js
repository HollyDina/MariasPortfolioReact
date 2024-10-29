import React from 'react';
import { Link } from "react-router-dom";
function Breadcrumbs(props) {
  console.log(props.path, "hje");

  return (
    <div>
      {<ul className='down-menu-link'>
        {props.list.map((item, index) => (
          <li className="down-menu-li" key={index}>
            <Link className="menu-link" to={item.path}>{item.label}</Link>/
          </li>
        ))}
      </ul>}
    </div>
  );
}

export default breadcrumbs;