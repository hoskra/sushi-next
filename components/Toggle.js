import { useState } from 'react';
import styles from '../styles/Toggle.module.scss'

export default function Toggle({setPrivate, isChecked}) {
  const [isInputChecked, setChecked] = useState (isChecked);

  const processOnChange = (e) => {
    if(setPrivate)
      setPrivate(e.target.checked);
    setChecked(e.target.checked);
  }

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={(e) => processOnChange(e)} checked={isInputChecked}/>
      <span className={styles.slider}></span>
    </label>
  )
}