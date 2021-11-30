import Link from 'next/link'
import styles from '../styles/Layout.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { logOut } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
import { trending } from '../redux/tabSlice'

export default function Navbar() {
  const loggedIn = useSelector((state) => state.user.value)
  const pageName = useSelector((state) => state.pageName.value)
  const dispatch = useDispatch()

  return (
      <nav className={styles.menu}>
        <div className={styles.container}>
          <ul>
            <li>
            <Link href="/">
              <a>
                <h1>SUSHI Textbooks</h1>
              </a>
            </Link>
            </li>
            <li>
              <h2>{pageName}</h2>
            </li>
          </ul>
        <ul className={styles.menu_items}>
          {
            loggedIn &&
            // pageName !== "Helmut Větvička" &&
              <li>
              <Link href="/user/0">
                <a>
                  <span>Helmut</span>
                  <FontAwesomeIcon className={styles.login} icon={faUserAlt} />
                </a>
              </Link>
              </li>
          }
          {
            loggedIn ?
            <li>
            <Link href="/">
              <a onClick={() => {
                dispatch(logOut());
                dispatch(trending());
                }}>
                <span>Sign Out</span>
                <FontAwesomeIcon className={styles.login} icon={faSignInAlt} />
              </a>
            </Link>
            </li>
            :
            <li>
              {(pageName !== "Sign in" && pageName !== "Sign up") &&
              <Link href="/signin">
                <a>Sign in<FontAwesomeIcon className={styles.login} icon={faSignInAlt} /></a>
              </Link>
              }
            </li>
          }
        </ul>
      </div>
    </nav>
  )
}
