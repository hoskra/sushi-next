import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import styles from '../../styles/Signin.module.scss'
import { logIn } from '../../redux/userSlice'
import { myTextbooks } from '../../redux/tabSlice'
import HeadComponent from '../../components/HeadComponent'

import { changeName } from "../../redux/pageNameSlice";

export default function SignIn() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(changeName("Sign in"));
  }, [dispatch])

  return (
    <>
      <HeadComponent title={"SUSHI | Sign In"} description="SuperUltraSonicHyperInteractive TextBook"/>

      <form className={styles.sign_in_form}>

      <div className={styles.form_title}>
        <h2 className={styles.sign_in}>Sign In</h2>
        <Link href='/signup' passHref>
          <h2 className={styles.sign_up}>Sign Up</h2>
        </Link>


      </div>

      <div className={styles.form_container}>

        <div className="sushi-input-container">
          <label>Email</label>
          <input className="sushi-input" defaultValue="helmut@vetvicka.com" type="text" />
        </div>
        <div className="sushi-input-container">
          <label>Password</label>
          <input className="sushi-input" defaultValue="helmutvetvicka" autoComplete="cc-csc" type="password"/>
        </div>

        <div className={styles.submit}>
        <Link href='/' passHref>
          <button
            className="sushi-button"
            onClick={() => {
              dispatch(logIn());
              dispatch(myTextbooks()); }}>
              Sign in
            </button>
        </Link>
        </div>

        <hr/>

        <div className={styles.alternative}>Or Sign In using your account with:</div>

        <div className={styles.socials}>
          <Link href='/' passHref>
            <button type="button" className="sushi-button" onClick={() => {dispatch(logIn());dispatch(myTextbooks()); }}>
              Google<FontAwesomeIcon icon={faGoogle} />
            </button>
          </Link>
          <Link href='/' passHref>
            <button type="button" className="sushi-button" onClick={() => {dispatch(logIn());dispatch(myTextbooks()); }}>
              Twitter<FontAwesomeIcon icon={faTwitter} />
            </button>
          </Link>
          <Link href='/' passHref>
            <button type="button" className="sushi-button" onClick={() => {dispatch(logIn());dispatch(myTextbooks()); }}>
              Facebook<FontAwesomeIcon icon={faFacebook} />
            </button>
          </Link>
        </div>
      </div>

      </form>
    </>
  )
}
