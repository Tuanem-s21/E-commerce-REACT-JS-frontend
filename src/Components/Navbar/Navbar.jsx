import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>

        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration: 'none', color: 'gray'}} to="/">Shop</Link> {menu==="shop" ? <hr /> : <> </>} </li>
            <li onClick={()=>{setMenu("mens")}} ><Link style={{textDecoration: 'none', color: 'gray'}} to="/mens">Men</Link> {menu==="mens" ? <hr /> : <> </>} </li>
            <li onClick={()=>{setMenu("womens")}} ><Link style={{textDecoration: 'none', color: 'gray'}} to="/womens">Women</Link> {menu==="womens" ? <hr /> : <> </>} </li>
            <li onClick={()=>{setMenu("kids")}} ><Link style={{textDecoration: 'none', color: 'gray'}} to="/kids">Kid</Link> {menu==="kids" ? <hr /> : <> </>} </li>
            <li onClick={()=>{setMenu("about")}} ><Link style={{textDecoration: 'none', color: 'gray'}} to="/about">About</Link> {menu==="about" ? <hr /> : <> </>} </li>
            <li onClick={()=>{setMenu("vlog")}} ><Link style={{textDecoration: 'none', color: 'gray'}} to="/vlog">V-Log</Link> {menu==="vlog" ? <hr /> : <> </>} </li>
        </ul>

        <div className="nav-login-cart">
            <Link style={{textDecoration: 'none', color: 'gray'}} to="/login"><button>Login</button></Link>
            <Link style={{textDecoration: 'none', color: 'gray'}} to="/cart"><img src={cart_icon} alt="cart icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar