import styles from '../styles/Textbook.module.scss'

import Link from 'next/link'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart as farFaStar} from '@fortawesome/free-regular-svg-icons'
import  StarRating  from './StarRating'
import Moment from 'moment';

export default function TextbookCard(props) {
  return (
    <div className={styles.card}>
      <span className={styles.title}>
        <Link href={{
                pathname: '/textbooks/[id]',
                query: {id: props.data.id},
              }}
        >
            <a>{props.data.title}</a>
          </Link>
        </span>
      <span className={styles.stars}><StarRating id={props.data.id}/></span>
      <span className={styles.author}>
        <Link href={{
                pathname: '/user/[id]',
                query: {id: props.data.userId},
              }}
        >
          <a>by {props.data.author}</a>
        </Link>
      </span>
      <span className={styles.modification}>last modified {props.data.modification}</span>
    </div>
  )
}
