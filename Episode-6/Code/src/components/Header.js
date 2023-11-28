import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  useEffect(() => {
    console.log("shubham");
  }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          height="100px"
          cd
          width="100px"
          className="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online : {onlineStatus ? "👍" : "🤦‍♂️"}</li>
          <li>
            <Link
              to="/"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>

          <li>
            <Link to="/grocery" className="nav-link">
              Grocery
            </Link>
          </li>

          <button
            className="loginbtn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

//Note dont use acnhor tag  in react beacasuse it reload the entire page instead we can make use to <link> tag given by react router dom it will refresh necessary component

//Link tag will only refresh the components wheres as anchor tag will reload the entire page
//React app are single page applications every page in the react are component  so when we navigate to a different page  browser will not reload or it will not mae any external call we are just navigating different pages which is already build in react
