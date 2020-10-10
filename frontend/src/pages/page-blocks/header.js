import React, {  useState, useEffect  } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
function Header() {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html"> <img src="assets/img/logo.png" alt="logo" /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="menu_icon"><i className="fas fa-bars" /></span>
                </button>
                  <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/shop">Shop</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/news">News</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/cart">Cart</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                    </ul>
                  </div>
                <div className="hearer_icon d-flex">
                  <a id="search_1" href="javascript:void(0)" onClick={toggleClass}><i className="ti-search" /></a>
                  <a href><i className="ti-heart" /></a>
                  <div className="dropdown cart">
                    <a className="dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-cart-plus" />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className={isActive ? 'search-open search_input': 'search_input'}  id="search_input_box">
          <div className="container ">
            <form className="d-flex justify-content-between search-inner">
              <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
              <button type="submit" className="btn" />
              <span className="ti-close" id="close_search" title="Close Search" />
            </form>
          </div>
        </div>
      </header>
    );
}
export default Header;