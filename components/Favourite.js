import React, { useState } from "react";
import styles from '../styles/Textbook.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Favourite = () => {
  const [favourite, setRating] = useState(false);

  const processFavourite = () => {
    if (favourite === false) {
      setRating(true)
    } else {
      setRating(false)
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