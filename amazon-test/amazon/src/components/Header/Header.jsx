import React, { useContext } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import {Link} from 'react-router-dom'
import './header.css'
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';

function Header() {
  const [{basket}, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)
  return (
    <section className="fixed">
      <header className="header_container">
        <div className="logo_container">
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <div className="delivery">
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="search">
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch size={38} />
        </div>
        <div className="order_container">
          <Link to="/" className="language">
            <img
              src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
              alt="amarican flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          <Link to="/auth" className="account">
            <p>Hello, Sign In</p>
            <span>Account & Lists</span>
          </Link>
          <Link to="/orders" className="order">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className="cart">
            <BiCart className="header-cart-icon" />
            <span>{totalItem}</span>
          </Link>
        </div>
      </header>
      <LowerHeader />
    </section>
  );
}

export default Header
