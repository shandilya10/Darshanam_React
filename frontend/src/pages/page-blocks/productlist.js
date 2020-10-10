import React, {  useState, useEffect  } from "react";
import Slider from "react-slick";
function ProductList() {
    return (
        <section className="product_list section_padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section_tittle text-center">
                  <h2>awesome <span>shop</span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="product_list_slider">
                  <div className="single_product_list_slider">
                    <div className="row align-items-center justify-content-between">
                      <div className="col-lg-3 col-sm-6">
                        <div className="single_product_item">
                          <img src="assets/img/product/product_1.png" alt="" />
                          <div className="single_product_text">
                            <h4>Quartz Belt Watch</h4>
                            <h3>$150.00</h3>
                            <a href="#" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single_product_item">
                          <img src="assets/img/product/product_2.png" alt="" />
                          <div className="single_product_text">
                            <h4>Quartz Belt Watch</h4>
                            <h3>$150.00</h3>
                            <a href="#" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single_product_item">
                          <img src="assets/img/product/product_3.png" alt="" />
                          <div className="single_product_text">
                            <h4>Quartz Belt Watch</h4>
                            <h3>$150.00</h3>
                            <a href="#" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single_product_item">
                          <img src="assets/img/product/product_4.png" alt="" />
                          <div className="single_product_text">
                            <h4>Quartz Belt Watch</h4>
                            <h3>$150.00</h3>
                            <a href="#" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single_product_item">
                          <img src="assets/img/product/product_5.png" alt="" />
                          <div className="single_product_text">
                            <h4>Quartz Belt Watch</h4>
                            <h3>$150.00</h3>
                            <a href="#" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single_product_item">
                          <img src="assets/img/product/product_6.png" alt="" />
                          <div className="single_product_text">
                            <h4>Quartz Belt Watch</h4>
                            <h3>$150.00</h3>
                            <a href="#" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single_product_item">
                          <img src="assets/img/product/product_7.png" alt="" />
                          <div className="single_product_text">
                            <h4>Quartz Belt Watch</h4>
                            <h3>$150.00</h3>
                            <a href="#" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="single_product_item">
                          <img src="assets/img/product/product_8.png" alt="" />
                          <div className="single_product_text">
                            <h4>Quartz Belt Watch</h4>
                            <h3>$150.00</h3>
                            <a href="#" className="add_cart">+ add to cart<i className="ti-heart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
export default ProductList;