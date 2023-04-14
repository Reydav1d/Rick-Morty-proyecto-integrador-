import Styles from './Style/Card.module.css';
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { addFav, removeFav } from "/Users/Mi PC/Desktop/RickYMorty/rick-y-morty/src/redux/actions/actions";
import { useState } from "react";
import { useEffect } from "react";

function Card(props) {
  const {
    id,
    name,
    // status,
    // species,
    // gender,
    // origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites
  } = props;
  // const dispatch = useDispatch()
  // dispatch(addFav({}))
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={Styles.card}>
      <div className={Styles.wrapper}>
        <figure>
          {isFav ? (
            <button onClick={handleFavorite} className={Styles.fav}><ion-icon name="heart-dislike"></ion-icon></button>
          ) : (
            <button onClick={handleFavorite} className={Styles.fav}><ion-icon name="heart"></ion-icon></button>
          )}
          <button onClick={() => onClose(id)} className={Styles.close}>
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>
          <Link className="link" to={`/detail/${id}`}>
            {/* <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2> */}
            {/* <h2>{origin}</h2> */}
            <h2 className={Styles.name} >{name}</h2>
            <img src={image} alt={name} />
            {/* <h1></h1> */}
          </Link>
        </figure>
      </div>
    </div >
  );
}

function mapStateToProp(state) {
  return {
    myFavorites: state.myFavorites
  };
}

function mapDispatchToProp(dispatch) {
  return {
    addFav: (ch) => dispatch(addFav(ch)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProp, mapDispatchToProp)(Card);
