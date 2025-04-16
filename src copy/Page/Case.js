import React from 'react';
import { CaseLargeworkcardsection } from '../components/CaseLargeworkcardsection';
function Casepage({ data }) {
  return (
    <div className="main-content">
      <CaseLargeworkcardsection data={data} />
    </div>
  )
}


export default Casepage

