/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import Category from "../Category/Category";

const Nav = ({ handleInputChange, query, onChangeCategory }) => {
  return (
    <nav>
      <img
        src="https://i.pinimg.com/474x/de/13/be/de13bedba8ab6783e2e460ff0e58e0a5.jpg"
        alt="shoes-logo"
        className="logo"
      ></img>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        ></input>
      </div>
      <Category onChangeCategory={onChangeCategory} />
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
