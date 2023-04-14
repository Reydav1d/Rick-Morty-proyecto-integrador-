import { useState } from "react";
import Styles from './Style/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  // console.log("####", onSearch);
  const [id, setId] = useState("");

  function handleChange(event) {
    console.log("input value ", event.target.value);
    setId(event.target.value);
  }
  return (
    <div className={Styles.wrap}>
      <div className={Styles.bar}>
        <input className={Styles.search} onChange={handleChange} type="search" name="search" value={id} placeholder="Busca un personaje!" />
        <button className={Styles.add} onClick={() => onSearch(id)}>
        <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
