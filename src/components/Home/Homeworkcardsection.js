import React from 'react';
import { Link } from 'react-router-dom';
import { Homeworkcard } from './Homeworkcard';
import { HomeworkcardTwo } from './HomeworkcardTwo';
import { CaseLargeworkcard } from '../Project/CaseLargeworkcard';
import { CaseLargeworkcardright } from '../Project/CaseLargeworkcardright';
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


/*div className='Homeworkcard-container-main'>
      <div className='Homeworkcard-container'>
       {data && data.map((item, index) => (
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
      <button className="Home-button" type="button">
        <Link className="nav__link" to="/case">
          Gå till flera Case
        </Link>
      </button>
    </div>*/


    /*  {allContents.map((item, index) => (
          <React.Fragment key={index}>
            {Object.values(item).map((content1Item, index1) => (
              <div className='Home-container-row' key={index1}>
                {console.log(content1Item.headlineMainSwe,content1Item.path ,"dina")}
              
                  <Homeworkcard item={content1Item} id={content1Item.path} />
             
  
              </div>
                ))}
              </React.Fragment>
  
        ))} */