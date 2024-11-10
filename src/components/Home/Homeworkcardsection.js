import React from 'react';
import { Homeworkcard } from './Homeworkcard';
function Homeworkcardsection({ dataHome}) {
  const isVisible = false;
 
  return (
   <div className='Homeworkcard-container-main'>
      <div className='Homeworkcard-container'>
       {dataHome&& dataHome.map((item, index) => (
          <div className='Home-container-row' key={index}>
            {index < 4 ? (
              <Homeworkcard item={item} />
            ) : (
              isVisible && (
                
                  <Homeworkcard item={item} />
              
              )
            )}
          </div>
        ))}


      </div>
    {/*  <button className="hero-button" type="button">
        <Link className="nav__link" to="/case">
          Gå till flera Case
        </Link>
      </button>} */}
    </div>

  )
}

export default Homeworkcardsection;

