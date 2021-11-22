
import "./Menu.css";
import { Link } from 'react-router-dom';
import React from "react";




export function Menu() {
  return (
    <div className='menu'>
        <ul>
          <li className='item'>
          <Link className='item-link' to="/">Home</Link>
          </li>
        
          <li className='item'>
            <Link className='item-link' to="/shop">Shop</Link>
            </li>
            <li>
              <img id='img-logo' alt='logo' src='./assets/Captura.PNG'/>
            </li>
          </ul>
          
       
     
    </div>
  );
}

