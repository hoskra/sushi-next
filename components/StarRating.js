import React, { useState } from "react";
import styles from '../styles/Textbook.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const StarRating = ({numOfStars}) => {
  const loggedIn = useSelector((state) => state.user.value);
  const [rating, setRating] = useState(false);
  let [stars, setStars] = useState(numOfStars);

  const processRating = () => {
    stars = parseInt(stars);
    if (rating === false) {
      setRating(true)
      setStars(stars+=1)
    } else {
      setRating(false)
      setStars(stars-=1)
    }
  }

  return (
    <span className={loggedIn ? styles.stars : styles.stars_logout}>
          {stars}
          <button
            type="button"
            className={rating ? styles.on : styles.off}
            onClick={() => loggedIn && processRating()}
          >
           <FontAwesomeIcon icon={faStar} />
          </button>
      </span>
  );
};

export default StarRating;
