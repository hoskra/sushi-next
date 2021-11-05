import Link from 'next/link'
import styles from '../styles/Layout.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (

    <navigation className={styles.navbar}>
      <Link href="/">
        <a>
          <h1>SUSHI Textbooks</h1>
        </a>
      </Link>

      <Link href="/users">
        <a className={styles.navbar.user}>User <FontAwesomeIcon className={styles.login} icon={faSignInAlt} /></a>
      </Link>

    </navigation>
  )
}