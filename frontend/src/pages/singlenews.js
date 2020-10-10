import React, { Component, useState } from "react";

function Singlenews({author, title, desc,img}) {
    return (
    <article className="blog_item">
      <div className="blog_item_img">
        <img className="card-img rounded-0" src={img} />
        <a href="#" className="blog_item_date">
          <h3>15</h3>
          <p>Jan</p>
        </a>
      </div>
      <div className="blog_details">
        <a className="d-inline-block" href="single-blog.html">
          <h2>{title}</h2>
        </a>
        <p>{desc}</p>
        <ul className="blog-info-link">
          <li><a href="#"><i className="far fa-user" /> {author}</a></li>
        </ul>
      </div>
    </article>
    );
}

export default Singlenews;