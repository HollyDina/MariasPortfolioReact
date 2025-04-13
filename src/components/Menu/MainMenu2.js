import imgs from "./314002952_821240728997254_1145159628344298327_n.jpg"


function MainMenu2() {
  return (


    <div className="card-container">
      <div className="left-section">
        <div className="text">
          <h2>UX-DEISIGNER</h2>
          <p>TILLGÄNGLIGHETSEXPERT</p>
        </div>
      </div>


      <div className="name-overlay">MARIAEKMAN</div>

      <div className="right-section">
        <img
          src={imgs}
          alt="Maria Ekman"
          className="profile-img-mobile"
        />
      </div>
</div>






  );
};




export default MainMenu2;
{/* 


      <div className="left-section">
        <div className="text">
          <h2>UX-DEISIGNER</h2>
          <p>TILLGÄNGLIGHETSEXPERT</p>
        </div>
      </div>


      <div className="name-overlay">MARIAEKMAN</div>

      <div className="right-section">
        <img
          src={imgs}
          alt="Maria Ekman"
          className="profile-img"
        />
      </div>
    </div>




  <div className='Nav-bar' style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>

    
      <div style={{
        justifyContent: "end",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "pink",
        textAlign: "end",
        width: "fit-content",
        padding: "30px",
        alignItems: "end",
        fontSize: "48px" // 👈 font size här
      }}>
        <div style={{
          height: "5px",
          backgroundColor: "red",
          width: "100%"
        }}></div>

        <div style={{ display: "inline-block" }}>
          Ux-desginer & digital<br />
          tillgänglighetsexpert
        </div>

        <div style={{
          height: "5px",
          backgroundColor: "red",
          width: "100%"
        }}></div>
      </div>

      <div style={{
        display: "flex",
        backgroundColor: "pink",
        width: "100%",
        height: "auto",
        justifyContent: "center",
        padding: "30px",
        boxSizing: "border-box"
      }}>
        <div style={{
          position: "relative",
          width: "100%",
          maxWidth: "500px",
          overflow: "hidden"
        }}>
          <img
            src={imgs}
            alt="Bild"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover"
            }}
          />

        
          <div style={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%) rotate(-90deg)",
              transformOrigin: "left center",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              padding: "5px 10px",
              fontSize: "48px",
              whiteSpace: "nowrap",
              textAlign: "center"
          }}>
            Maria Ekman
          </div>
        </div>
      </div>

    </div> */}