import styles from '../styles/Textbook.module.scss'

import Link from 'next/link'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default function TextbookMenu({isEdit, sendPageName}) {
  return (
    <ul className={`${styles.pageMenu} ${isEdit ? styles.pageMenuEdit : ''}`}>
      <li onClick={() => sendPageName("First Page")}>First Page</li>
      <li onClick={() => sendPageName("Second Page")}>Second Page</li>
      <li onClick={() => sendPageName("Third Page")}>Third Page</li>
      <li onClick={() => sendPageName("Fourth Page")}>Fourth Page</li>
      <li onClick={() => sendPageName("Fifth Page")}>Fifth Page</li>
      {isEdit &&
        <li onClick={() => sendPageName("New Page")}>Create New Page <FontAwesomeIcon icon={faPlus}/></li>
      }
    </ul>
  )
}
