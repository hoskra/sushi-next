import React, { useState } from "react";
import styles from '../styles/Textbook.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

import { addFavourite, removeFavourite } from "../redux/textbookSlice";

const Favourite = ({selected, id}) => {
  const [favourite, setRating] = useState(selected);
  const dispatch = useDispatch();

  const processFavourite = () => {
    if (favourite === false) {
      setRating(true);
      dispatch(addFavourite(id));
    } else {
      setRating(false)
      dispatch(removeFavourite(id));
    }
  }

  return (
    <div
      type="button"
      className={favourite ? styles.on : styles.off}
      onClick={() => processFavourite()}
      >
      { favourite ? <span>Favourite</span> : <span>Make favourite</span> }
      <FontAwesomeIcon icon={faBookmark} />
    </div>
  );
};

export default Favourite;