import React from 'react';
import './App.css';
import Header from './pages/page-blocks/header';
import Footer from './pages/page-blocks/footer';
import home from './pages/home';
import contact from "./pages/contact";
import news from "./pages/news";
import shop from "./pages/shop";
import login from "./pages/login";
import cart from "./pages/cart";
import product from "./pages/product";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
function App() {

  return (
    <div>
       <HashRouter>
        <Header />
        <div className="content">
            <Route exact path="/" component={home}/>
            <Route path="/shop" component={shop}/>
            <Route path="/contact" component={contact}/>
            <Route path="/news" component={news}/>
            <Route path="/cart/:id?" component={cart}/>
            <Route path="/login" component={login}/>
            <Route path="/product/:id" component={product}/>
          </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
