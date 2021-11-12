import styles from '../styles/Textbook.module.scss'

import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

export default function TextbookCard(props) {
  return (
    <div className={styles.card}>
      <span className={styles.title}>
        <Link className={styles.title}
            href={{
              pathname: '/textbooks/[id]',
              query: { id: props.data.id },
            }}
          >
            <a>{props.data.title}</a>
          </Link>
        </span>
      <span className={styles.stars}>{props.data.stars}<FontAwesomeIcon icon={farFaStar} /></span>
      <span className={styles.author}>by {props.data.author}</span>
      <span className={styles.modification}>last modified {props.data.modification}</span>
    </div>
  )
}