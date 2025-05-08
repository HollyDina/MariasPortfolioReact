import imgs from "../../img/314002952_821240728997254_1145159628344298327_n.jpg"


function Presentation() {
  return (
 

<>

<div className="card-container-mobile" >
  <div className="card-content-mobile" >
    <img
      src={imgs}
      alt="Maria Ekman"
      className="profile-img-mobile"
    />
    <div className="text-content-mobile">
      <h1 className="name-mobile">MARIA EKMAN</h1>
      <div class="subtitle-wrapper-mobile">
        
        <p className="title-mobile">UX-DESIGNER</p>
        <p className="subtitle-mobile">TILLGÄNGLIGHETSEXPERT</p>
      </div>
    </div>
  </div>
</div>


<div className="card-wrapper">
  <div className="card-container">
    <div className="left-section">
      <div className="text">
        <h2>UX-DESIGNER</h2>
        <p>TILLGÄNGLIGHETSEXPERT</p>
      </div>
    </div>


    <div className="name-overlay">MARIA EKMAN</div>

    <div className="right-section">
      <img
        src={imgs}
        alt="Maria Ekman"
        className="profile-img"
      />
    </div>


  </div>
</div>


</>

  );
};




export default Presentation;