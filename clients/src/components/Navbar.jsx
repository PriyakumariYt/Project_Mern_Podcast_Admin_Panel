
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../ContextApi/TokenApi";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  console.log("login or not ", isLoggedIn);
  const {user} = useAuth()
  const {showMenu} = useAuth()

  return (
    <>
      <header>
        <div className="Header">
          <nav>
            <h1>{user.username}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Google_Podcasts_icon.svg/2048px-Google_Podcasts_icon.svg.png" 
   style={{ color: "black", fontSize: "50px" }} alt="" />

</h1>

            <div className="nav-links" id="navlinks">
              <ul>
                <li>
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                  <NavLink to="/about"> About </NavLink>
                </li>
                <li>
                  <NavLink to="/service"> Services </NavLink>
                </li>
                <li>
                  <NavLink to="/contact"> Contact </NavLink>
                </li>
               
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
</>
              )}
              
                </ul>
            </div>
          
            <i id="menu-bar" className="fas fa-bars" onClick={showMenu}></i>   
          </nav>

        </div>
      </header>
    </>
  );
};


export default Navbar

