import React, { Component, useEffect, useState  } from "react";
import {
    NavLink
  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";
function Product(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch(detailsProduct(props.match.params.id));
      return () => {
        //
      };
    },[]);

    const handleAddToCart = () => {
      props.history.push("/cart/"+props.match.params.id+ "?qty=" + qty )
    }
    return (
        <div>
        {/* breadcrumb start*/}
        <section className="breadcrumb breadcrumb_bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="breadcrumb_iner">
                  <div className="breadcrumb_iner_item">
                    <h2>Product</h2>
                    <p><NavLink className="nav-link" exact to="/">Home</NavLink> <span>-</span> Product</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb start*/}
        {/*================End Home Banner Area =================*/}
        {/*================Single Product Area =================*/}
        {loading? <div>Loading...</div>:
        error? <div>{error}</div>:
        (
          <div className="product_image_area section_padding">
          <div className="container">
            <div className="row s_product_inner justify-content-between">
              <div className="col-lg-7 col-xl-7">
                <div className="product_slider_img">
                  <div id="vertical">
                    <div data-thumb={product.detail_image}>
                      <img src={product.detail_image} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="s_product_text">
                  <h5>previous <span>|</span> next</h5>
                  <h3>{product.name}</h3>
                  <h2>${product.price}</h2>
                  <ul className="list">
                    <li>
                      <a className="active" href="#">
                        <span>Category</span> : {product.category}</a>
                    </li>
                    <li>
                      <a href="#"> <span>Availibility</span> : {product.countInStock>0? "In Stock":"Out of Stock"}</a>
                    </li>
                  </ul>
                  <p>
                  {product.desc}
                  </p>
                  <div className="card_area d-flex justify-content-between align-items-center">
                    <div className="product_count">
                      <span>Qty :</span> 
                      <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                      {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                      </select>
                    </div>
                    {product.countInStock>0 ? <button className="btn_3" onClick={handleAddToCart}>add to cart</button>:"" }
                    
                    <a href="#" className="like_us"> <i className="ti-heart" /> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )       
      }
        
        {/*================End Single Product Area =================*/}
        {/*================Product Description Area =================*/}
        <section className="product_description_area">
          <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Specification</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                <p>
                  Beryl Cook is one of Britain’s most talented and amusing artists
                  .Beryl’s pictures feature women of all shapes and sizes enjoying
                  themselves .Born between the two world wars, Beryl Cook eventually
                  left Kendrick School in Reading at the age of 15, where she went
                  to secretarial school and then into an insurance office. After
                  moving to London and then Hampton, she eventually married her next
                  door neighbour from Reading, John Cook. He was an officer in the
                  Merchant Navy and after he left the sea in 1956, they bought a pub
                  for a year before John took a job in Southern Rhodesia with a
                  motor company. Beryl bought their young son a box of watercolours,
                  and when showing him how to use it, she decided that she herself
                  quite enjoyed painting. John subsequently bought her a child’s
                  painting set for her birthday and it was with this that she
                  produced her first significant work, a half-length portrait of a
                  dark-skinned lady with a vacant expression and large drooping
                  breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                </p>
                <p>
                  It is often frustrating to attempt to plan meals that are designed
                  for one. Despite this fact, we are seeing more and more recipe
                  books and Internet websites that are dedicated to the act of
                  cooking for one. Divorce and the death of spouses or grown
                  children leaving for college are all reasons that someone
                  accustomed to cooking for more than one would suddenly need to
                  learn how to adjust all the cooking practices utilized before into
                  a streamlined plan of cooking that is more efficient for one
                  person creating less
                </p>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <h5>Width</h5>
                        </td>
                        <td>
                          <h5>128mm</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Height</h5>
                        </td>
                        <td>
                          <h5>508mm</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Depth</h5>
                        </td>
                        <td>
                          <h5>85mm</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Weight</h5>
                        </td>
                        <td>
                          <h5>52gm</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Quality checking</h5>
                        </td>
                        <td>
                          <h5>yes</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Freshness Duration</h5>
                        </td>
                        <td>
                          <h5>03days</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>When packeting</h5>
                        </td>
                        <td>
                          <h5>Without touch of hand</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Each Box contains</h5>
                        </td>
                        <td>
                          <h5>60pcs</h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="comment_list">
                      <div className="review_item">
                        <div className="media">
                          <div className="d-flex">
                            <img src="img/product/single-product/review-1.png" alt="" />
                          </div>
                          <div className="media-body">
                            <h4>Blake Ruiz</h4>
                            <h5>12th Feb, 2017 at 05:56 pm</h5>
                            <a className="reply_btn" href="#">Reply</a>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                      </div>
                      <div className="review_item reply">
                        <div className="media">
                          <div className="d-flex">
                            <img src="img/product/single-product/review-2.png" alt="" />
                          </div>
                          <div className="media-body">
                            <h4>Blake Ruiz</h4>
                            <h5>12th Feb, 2017 at 05:56 pm</h5>
                            <a className="reply_btn" href="#">Reply</a>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                      </div>
                      <div className="review_item">
                        <div className="media">
                          <div className="d-flex">
                            <img src="img/product/single-product/review-3.png" alt="" />
                          </div>
                          <div className="media-body">
                            <h4>Blake Ruiz</h4>
                            <h5>12th Feb, 2017 at 05:56 pm</h5>
                            <a className="reply_btn" href="#">Reply</a>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="review_box">
                      <h4>Post a comment</h4>
                      <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea className="form-control" name="message" id="message" rows={1} placeholder="Message" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-md-12 text-right">
                          <button type="submit" value="submit" className="btn_3">
                            Submit Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row total_rate">
                      <div className="col-6">
                        <div className="box_total">
                          <h5>Overall</h5>
                          <h4>4.0</h4>
                          <h6>(03 Reviews)</h6>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="rating_list">
                          <h3>Based on 3 Reviews</h3>
                          <ul className="list">
                            <li>
                              <a href="#">5 Star
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" /> 01</a>
                            </li>
                            <li>
                              <a href="#">4 Star
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" /> 01</a>
                            </li>
                            <li>
                              <a href="#">3 Star
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" /> 01</a>
                            </li>
                            <li>
                              <a href="#">2 Star
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" /> 01</a>
                            </li>
                            <li>
                              <a href="#">1 Star
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" /> 01</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="review_list">
                      <div className="review_item">
                        <div className="media">
                          <div className="d-flex">
                            <img src="img/product/single-product/review-1.png" alt="" />
                          </div>
                          <div className="media-body">
                            <h4>Blake Ruiz</h4>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                      </div>
                      <div className="review_item">
                        <div className="media">
                          <div className="d-flex">
                            <img src="img/product/single-product/review-2.png" alt="" />
                          </div>
                          <div className="media-body">
                            <h4>Blake Ruiz</h4>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                      </div>
                      <div className="review_item">
                        <div className="media">
                          <div className="d-flex">
                            <img src="img/product/single-product/review-3.png" alt="" />
                          </div>
                          <div className="media-body">
                            <h4>Blake Ruiz</h4>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="review_box">
                      <h4>Add a Review</h4>
                      <p>Your Rating:</p>
                      <ul className="list">
                        <li>
                          <a href="#">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                      </ul>
                      <p>Outstanding</p>
                      <form className="row contact_form" action="contact_process.php" method="post" noValidate="novalidate">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Your Full name" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="number" placeholder="Phone Number" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea className="form-control" name="message" rows={1} placeholder="Review" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-md-12 text-right">
                          <button type="submit" value="submit" className="btn_3">
                            Submit Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End Product Description Area =================*/}
        {/* product_list part start*/}
        <section className="product_list best_seller">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section_tittle text-center">
                  <h2>Best Sellers <span>shop</span></h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-12">
                <div className="best_product_slider owl-carousel">
                  <div className="single_product_item">
                    <img src="img/product/product_1.png" alt="" />
                    <div className="single_product_text">
                      <h4>Quartz Belt Watch</h4>
                      <h3>$150.00</h3>
                    </div>
                  </div>
                  <div className="single_product_item">
                    <img src="img/product/product_2.png" alt="" />
                    <div className="single_product_text">
                      <h4>Quartz Belt Watch</h4>
                      <h3>$150.00</h3>
                    </div>
                  </div>
                  <div className="single_product_item">
                    <img src="img/product/product_3.png" alt="" />
                    <div className="single_product_text">
                      <h4>Quartz Belt Watch</h4>
                      <h3>$150.00</h3>
                    </div>
                  </div>
                  <div className="single_product_item">
                    <img src="img/product/product_4.png" alt="" />
                    <div className="single_product_text">
                      <h4>Quartz Belt Watch</h4>
                      <h3>$150.00</h3>
                    </div>
                  </div>
                  <div className="single_product_item">
                    <img src="img/product/product_5.png" alt="" />
                    <div className="single_product_text">
                      <h4>Quartz Belt Watch</h4>
                      <h3>$150.00</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* product_list part end*/}
      </div>
    );
}
 
export default Product;