import styles from '../../styles/Signin.module.scss'

import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import { logIn } from '../../redux/userSlice'
import HeadComponent from '../../components/HeadComponent'

export default function SignIn() {
  const dispatch = useDispatch()

  return (
    <>
      <HeadComponent title={"SUSHI | Sign In"} description="SuperUltraSonicHyperInteractive TextBook"/>
      
      <form className={styles.sign_in_form}>
      
      <h2>Sign In</h2>
      <div className="input">
        <label>Email</label>
        <input className="sushi-input" type="text" />
      </div>
      <div className="input">
        <label>Password</label>
        <input className="sushi-input" type="password"/>
      </div>

      <div className={styles.submit}>
      <button type="button" className="sushi-button">Sign Up</button>
      <Link href='/' passHref>
        <button
          className="sushi-button"
          onClick={() => dispatch(logIn())}>
            Sign in
          </button>
      </Link>
      </div>

      <hr/>

      <div className={styles.alternative}>Or Sign In using your account with</div>

      <div className={styles.socails}>
        <button type="button" className="sushi-button">Google<FontAwesomeIcon icon={faGoogle} /></button>
        <button type="button" className="sushi-button">Twitter<FontAwesomeIcon icon={faTwitter} /></button>
        <button type="button" className="sushi-button">Google<FontAwesomeIcon icon={faFacebook} /></button>
      </div>

      </form>
    </>
  )
}