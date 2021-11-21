import styles from '../styles/Textbook.module.scss'

import Link from 'next/link'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default function TextbookMenu({isEdit}) {
  return (
    <ul className={`${styles.pageMenu} ${isEdit ? styles.pageMenuEdit : ''}`}>
      <li>First Page</li>
      <li>Second Page</li>
      <li>Third Page</li>
      <li>Fourth Page</li>
      <li>Fifth Page</li>
      {isEdit &&
        <li>Create New Page <FontAwesomeIcon icon={faPlus}/></li>
      }
    </ul>
  )
}
