import "./Menu.css";
import { Link } from "react-router-dom";
import React from "react";

export function Menu() {
  return (
    <div className="menu">
      <ul>
        <div>
          <li>
            <img id="img-logo" alt="logo" src="./assets/Captura.PNG" />
          </li>
        </div>
        <div>
          <li className="item">
            <Link className="item-link" to="/">
              Home
            </Link>
          </li>
          <li className="item">
            <Link className="item-link" to="/">
              About us
            </Link>
          </li>
          <li className="item">
            <Link className="item-link" to="/">
              Contact us
            </Link>
          </li>
          
        </div>
        <div>
        <li className="item">
          <Link className="item-link" to="/shop">
            Shop
          </Link>
        </li>
        </div>
      </ul>
    </div>
  );
}
