import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import './header.css'

// import "./LowerHeader.css"; // Import CSS for styling

function LowerHeader() {
  return (
        <div className="lower-header-section">
          <ul>
            <li>
              <AiOutlineMenu />
              <p>All</p>
            </li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div> 
  );
}

export default LowerHeader;
