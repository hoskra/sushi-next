import React, { useState } from "react";
import styles from '../styles/Textbook.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const StarRating = ({numOfStars}) => {
  const [rating, setRating] = useState(false);
  const [stars, setStars] = useState(numOfStars);

  const processRating = () => {
    if (rating === false) {
      setRating(true)
      setStars(stars+=1)
    } else {
      setRating(false)
      setStars(stars-=1)
    }
  }

  return (
    <span className={styles.stars}>
          {stars}
          <button
            type="button"
            className={rating ? styles.on : styles.off}
            onClick={() => processRating()}
          >
           <FontAwesomeIcon icon={faStar} />
          </button>
      </span>
  );
};

export default StarRating;