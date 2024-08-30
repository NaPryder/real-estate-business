import { Link, NavLink, useNavigate } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";
import logoDesktop from "@assets/logo-desktop.svg";
import logoLaptop from "@assets/logo-laptop.svg";
import logoMobile from "@assets/logo-mobile.svg";
import useWindowResize from "@/hooks/useWindowResize";
import { APP_SCREEN_WIDTH } from "@/hooks/constants";

// import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  function scrollToComponent() {
    console.log("scroll to :>> ");
  }

  const width = useWindowResize();

  return (
    <nav id="nav-container">
      <Link to="/" reloadDocument>
        <img
          src={
            width < APP_SCREEN_WIDTH.desktop
              ? logoLaptop
              : width < APP_SCREEN_WIDTH.desktop
              ? logoMobile
              : logoDesktop
          }
          alt="logo"
        />
      </Link>

      <div id="menu-container">
        {/* <ScrollLink
          className="nav-link"
          to="section-discover-mentor"
          smooth={true}
          offset={-50}
          duration={300}
          onClick={() => scrollToComponent()}
        >
          Find Mentor
        </ScrollLink> */}
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about-us">
          About Us
        </NavLink>
        <NavLink className="nav-link" to="/properties">
          Properties
        </NavLink>
        <NavLink className="nav-link" to="/service">
          Services
        </NavLink>
      </div>
      <button id="button-contact-us">Contact Us</button>
    </nav>
  );
}
