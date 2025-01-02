import { useState } from "react";
import "./navbar.scss";
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src="/logo.png" alt="logo" />
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agent">Agents</a>
      </div>
      <div className="right">
        <a href="/signin">Sign In</a>
        <a href="/signup" className="register">Sign Up</a>
        <div className="menuIcon">
          <img src="/menu.png" onClick={() => setOpen(!open)} alt="menu" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agent">Agents</a>
          <a href="/signin">Sign In</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
