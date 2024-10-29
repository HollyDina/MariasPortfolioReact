import React from 'react';
import { CaseLargeWorkcardSection } from '../components/Project/CaseLargeWorkcardSection';

function Casepage({ dataHome }) {
  console.log(dataHome, "case");

  return (
    <div className="main-content">
    <CaseLargeWorkcardSection dataHome={dataHome} />


    </div>
  )
}


export default Casepage

