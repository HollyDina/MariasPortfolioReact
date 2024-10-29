import React from 'react';
import Images from './Images';

function Textcase(props) {

   
    
    function replaceWithBr() {
      return props.text.replace(/\n/g, "<br />");
    }
  
    return (
      <div>
        <p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />
        {/*<p className="css-fix">{props.text}</p>*/}
      </div>
    );
  }

export default Textcase;

