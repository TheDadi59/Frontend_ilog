import React, { useContext, useState } from "react"
import { NavLink, Link } from "react-router-dom"




const NavBar = () => {
  const [showAccount, setShowAccount] = useState(false);

  const handleAccountClick = () => {
    setShowAccount(!showAccount);
  };

  const isLoggedIn = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");
  return (
    <nav style={{ backgroundColor: "#f8f9fa", padding: "10px", display: "flex", justifyContent: "flex-end" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to={"/App"} style={{ marginRight: "10px", color: "#000", textDecoration: "none" }}>
          
    

      <p className="btn-text">Home</p>
        </Link>

        <button
          className="navbar-toggler"
        
          
          style={{ border: "none", background: "transparent" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" style={{ justifyContent: "space-between" }} to={"/home"}>
                
     

      <p className="btn-text">Se    </p>
              </NavLink>
			  <NavLink className="nav-link" style={{justifyContent: "space-between" , marginLeft: "10px"}} to={"/GestionDemande"}>
                
    

      <p className="btn-text">Gestion Des Demande</p>
              </NavLink>
            </li>

            {isLoggedIn && userRole === "ROLE_ADMIN" && (
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={"/admin"}>
                  Admin
                </NavLink>
              </li>
			  
            )}
		
          </ul>

          <ul className="navbar-nav">
           

            
          </ul>
        </div>
     
    </nav>
  );
};

export default NavBar;