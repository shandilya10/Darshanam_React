import React, { Component, useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";

function Cart(props) {

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
      dispatch(removeFromCart(productId));
    }
    useEffect( ()=>{
      if(productId){
        dispatch(addToCart(productId,qty));
      }
    },[]);
    return (
        <div>
        {/*================Home Banner Area =================*/}
        {/* breadcrumb start*/}
        <section className="breadcrumb breadcrumb_bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="breadcrumb_iner">
                  <div className="breadcrumb_iner_item">
                    <h2>Cart Products</h2>
                    <p>Home <span>-</span>Cart Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb start*/}
        {/*================Cart Area =================*/}
        <section className="cart_area padding_top">
          <div className="container">
            <div className="cart_inner">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length === 0 ?
                    <div>Cart is empty</div>
                    :
                    cartItems.map(item =>
                    <tr>
                      <td>
                        <div className="media">
                          <div className="d-flex">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="media-body">
                          <p>
                            <Link to={"/product/" + item.product}>
                              {item.name}
                            </Link>
                          </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h5>${item.price}</h5>
                      </td>
                      <td>
                        <div className="product_count">
                          <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                            {[...Array(item.countInStock).keys()].map(x =>
                              <option key={x + 1} value={x + 1}>{x + 1}</option>
                            )}
                          </select>
                        </div>
                      </td>
                      <td>
                        <h5>$720.00</h5>
                      </td>
                      <td>
                        <button className="btn_1" onClick={() => removeFromCartHandler(item.product)} >Delete</button>
                      </td>
                    </tr>
                    )
                  }
                    <tr className="bottom_button">
                      <td>
                        <a className="btn_1" href="#">Update Cart</a>
                      </td>
                      <td />
                      <td />
                      <td>
                        <div className="cupon_text float-right">
                          <a className="btn_1" href="#">Close Coupon</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        <h5>Subtotal</h5>
                      </td>
                      <td>
                        <h5>$2160.00</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="checkout_btn_inner float-right">
                  <a className="btn_1" href="#">Continue Shopping</a>
                  <a className="btn_1 checkout_btn_1" href="#">Proceed to checkout</a>
                </div>
              </div>
            </div>
          </div></section>
        {/*================End Cart Area =================*/}
      </div>
    );
}
 
export default Cart;