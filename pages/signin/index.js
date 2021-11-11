// import styles from '../../styles/Signin.module.scss'

import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/userSlice'

export default function SignIn() {
  const dispatch = useDispatch()

  return (
    <>
      <Link href={{ pathname: '/', }}>
        <button
          className="sushi-button"
          onClick={() => dispatch(logIn())}
          >
            Sign in</button>
      </Link>
    </>
  )
}