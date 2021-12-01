import { useState } from 'react';
import styles from '../styles/Toggle.module.scss'

import { useDispatch } from 'react-redux';
import { makePrivate, makePublic } from '../redux/textbookSlice';

export default function Toggle({setPrivate, isChecked, id}) {
  const dispatch = useDispatch();
  const [isInputChecked, setChecked] = useState (isChecked);

  const processOnChange = (e) => {
    if(setPrivate) {
      setPrivate(e.target.checked);
    } 

    if(isInputChecked) {
      dispatch(makePublic(id));
    } else {
      dispatch(makePrivate(id));
    }

    setChecked(e.target.checked);
  }

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={(e) => processOnChange(e)} checked={isInputChecked}/>
      <span className={styles.slider}></span>
    </label>
  )
}