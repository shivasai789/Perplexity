import { LuArrowLeftToLine } from "react-icons/lu";
import { BiSearchAlt } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { PiSignInBold } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { noScrollbarsClassName } from "react-remove-scroll-bar";
// import Discover from '../Discover'
import "./index.css";

const Sidebar = () => {
  return (
    <>
      <div className={`sidebar-container ${noScrollbarsClassName}`}>
        <div>
          <div className="logo-container">
            <img src="perplexity-logo.png" alt="logo" className="logo-image" />
            <LuArrowLeftToLine size="15" color="#DEDFDD" />
          </div>
          <button className="new-thread-btn">
            <p>New Thread</p>
            <div className="thread-shortcut">
              <p>Ctrl</p>
              <p>I</p>
            </div>
          </button>
          <ul className="tabs-container">
            <li className="tab-item">
              <BiSearchAlt size="25" style={{ marginRight: "5px" }} />
              <p>Home</p>
            </li>
            <li className="tab-item active">
              <BsGlobe size="18" style={{ marginRight: "9px" }} />
              <p>Discover</p>
            </li>
            <li className="tab-item">
              <ImBooks size="22" style={{ marginRight: "5px" }} />
              <p>Library</p>
            </li>
            <li className="tab-item">
              <PiSignInBold size="22" style={{ marginRight: "5px" }} />
              <p>Sign in</p>
            </li>
          </ul>
          <button type="button" className="sign-up-btn">
            Sign Up
          </button>
        </div>
        <div style={{ color: "white" }}>
          <p style={{ fontWeight: "500" }}>Try Pro</p>
          <p style={{ color: "#878c8c" }}>
            Upgrade for image upload, smarter AI, and more Pro Search.
          </p>
          <button type="button" className="learn-more-btn">
            <GoArrowUpRight size="20" style={{ marginRight: "5px" }} />
            <p>Learn More</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
