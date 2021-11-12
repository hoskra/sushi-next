// import styles from '../../styles/Signin.module.scss'

import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/userSlice'
import { trending } from '../../redux/tabSlice'

import HeadComponent from '../../components/HeadComponent'

export default function SignIn() {
  const dispatch = useDispatch()

  return (
    <>
      <HeadComponent title={"SUSHI | Sign In"} description="SuperUltraSonicHyperInteractive TextBook"/>
      <Link href='/' passHref>
        <button
          className="sushi-button"
          onClick={() => dispatch(logIn())}>
            Sign in
          </button>
      </Link>
    </>
  )
}