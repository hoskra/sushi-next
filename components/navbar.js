import Link from 'next/link'
import styles from '../styles/Layout.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className={styles.menu}>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <h1>SUSHI Textbooks</h1>
          </a>
        </Link>
        <div>
          <Link href="/user">
            <a >User <FontAwesomeIcon className={styles.login} icon={faUserAlt} /></a>
          </Link>
          <Link href="/">
            <a >Login <FontAwesomeIcon className={styles.login} icon={faSignInAlt} /></a>
          </Link>
        </div>
      </div>
    </nav>
  )
}