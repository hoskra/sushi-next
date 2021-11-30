import React, { useState } from "react";
import styles from '../styles/Textbook.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { addStar, removeStar } from "../redux/textbookSlice";
import { useDispatch } from "react-redux";

const StarRating = ({id}) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.value);
  const isSet = useSelector((state) => state.textbook.value[id].starSet);
  const stars = useSelector((state) => state.textbook.value[id].stars);

  const processRating = () => {
    if (isSet === false) {
      dispatch(addStar(id));
    } else {
      dispatch(removeStar(id));
    }
  }

  return (
    <span className={loggedIn ? styles.stars : styles.stars_logout}>
          {stars}
          <button
            type="button"
            className={isSet ? styles.on : styles.off}
            onClick={() => loggedIn && processRating()}
          >
           <FontAwesomeIcon icon={faStar} />
          </button>
      </span>
  );
};

export default StarRating;
