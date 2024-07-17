import { LOGO_URL } from "./utils/constants";
import logo from "../assets/images/food-giri-img.png"
const Header = () => {
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"  src={logo}  alt="burger" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
