import React, { Component } from "react";
import Banner from './page-blocks/banner';
import ClientLogo from './page-blocks/clientslogo';
import Newsletter from './page-blocks/newsletter';
import HomeCategory from './page-blocks/homecategory';
import OfferSection from './page-blocks/offersection';
import ProductList from './page-blocks/productlist';
class home extends Component {
  render() {
    return (
      <div>
            <Banner />
            <HomeCategory />
            <ProductList />
            <OfferSection />
            <Newsletter />
            <ClientLogo />
        </div>
    );
  }
}
 
export default home;