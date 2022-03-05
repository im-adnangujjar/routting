import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
export default function Navbar() {
  return (
      <div >
      <div >
        <ul className="gujjar">
          <li>
            <Link to="/">Links</Link>
          </li>
          <li>
            <Link to="/AboutUs">AboutUs</Link>
          </li>
          <li>
            <Link to="/Skills ">Skills</Link>
          </li>
          <li>
            <Link to="/Home ">Home</Link>
          </li>
          <li>
            <Link to="/ContactUs ">ContactUs </Link>
          </li>
          <li>
            <Link to="/Services ">Services </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
