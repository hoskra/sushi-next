import Link from 'next/link'
import styles from '../styles/Layout.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { logOut } from '../redux/userSlice'
import { useDispatch } from 'react-redux'

export default function Navbar() {
  const loggedIn = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

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
          {
            loggedIn ?
            <Link href="/">
              <a onClick={() => dispatch(logOut())}>Sign Out<FontAwesomeIcon className={styles.login} icon={faSignInAlt} /></a>
            </Link>
            :
            <Link href="/signin">
              <a>Sign in<FontAwesomeIcon className={styles.login} icon={faSignInAlt} /></a>
            </Link>
          }
        </div>
      </div>
    </nav>
  )
}