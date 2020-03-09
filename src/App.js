import React from 'react';
import './App.css';
import { Router, Link } from "@reach/router";
import {Pspdfkit} from './Pspdfkit';
import {Pdftron} from './Pdftron';

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">PSPDFKIT</NavLink>
        <NavLink to="/pdftron">PDFTron</NavLink>
      </nav>
      <div className="content">
        <Router>
          <Pspdfkit path="/" default />
          <Pdftron path="/pdftron" />
        </Router>
      </div>
    </div>
  );
}

const NavLink = props => (
  <Link {...props} getProps={({isCurrent}) => ({
    className: isCurrent ? "active" : ""
  })}/>
)

export default App;
