import React from "react";
import './App.css';
function Header() {
  return (
    <React.Fragment>
      
      <div className="fixed-background" style={{
        width: "100%",
        height: "250px",
        position: "relative",
       
        background:"url(img/headerbackground.svg)",
        
      }}>
        <nav style={{
                display: "flex",
                justifyContent: "space-between"
        }}>
            <a href="/html/">
            <img style={{
                height: "35px",
                marginTop: "5px"
            }} 
            
            src="img/menu.png"  />
            </a>
            <a href="/css/">
            <img style={{marginTop: "12px"}} src="img/RidePro.png"  />
            </a>
            <a href="/js/">
            <img src="img/logo.png"  style={{height: "55px"}} />
            </a>
      </nav>


            <div className="fixed-background" style={{
                position: "absolute",
                bottom: "10px",
                height:"184px",
                width:"188px",
                backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
   background:"url(img/pikeheader.png)",
            }}>
               
            </div>
            <div>
                <p>
                    Explorez la liberté à vélo
                </p>
            </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
