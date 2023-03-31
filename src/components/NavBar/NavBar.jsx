import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Styles from './Style/NavBar.module.css';

import { Link } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
  return (
    <div className={Styles.nav}>
      <Link to="/home">
        <button className={Styles.btns}>Home</button>
      </Link>
      <Link to="/about">
        <button className={Styles.btns}>About</button>
      </Link>
      <Link to="/favorites">
        <button className={Styles.btns}>Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <button className={Styles.log} onClick={logout}>LogOut</button>
    </div>
  );
}
