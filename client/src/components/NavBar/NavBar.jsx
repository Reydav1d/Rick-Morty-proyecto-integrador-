import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Styles from './Style/NavBar.module.css';

import { Link } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
  return (
    <div className={Styles.nav}>
      <Link to="/home">
        <button className={Styles.btns}>
        <ion-icon name="home-outline"></ion-icon>
        </button>
      </Link>
      <Link to="/about">
        <button className={Styles.btns}>
        <ion-icon name="information-circle-outline"></ion-icon>
        </button>
      </Link>
      <Link to="/favorites">
        <button className={Styles.btns}>
        <ion-icon name="heart"></ion-icon>
        </button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <button className={Styles.log} onClick={logout}>
      <ion-icon name="log-out-outline"></ion-icon>
      </button>
    </div>
  );
}
