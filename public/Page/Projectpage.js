import React, { useState } from 'react';

import CaseLargeWorkcardSection from './components/Project/CaseLargeWorkcardsection';
function Projectpage({data}) {
  return (
    <div className="main-content">
      <CaseLargeWorkcardSection data={data}/>
    </div>


  );
}


export default Projectpage;

