import React, {useState} from "react";
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Tabs from "./Tabs";
import SushiModal from "./SushiModal";
import modalStyles from '../styles/Modal.module.scss'
import Toggle from "./Toggle";
import styles from "../styles/Signin.module.scss";
import Link from "next/link";

export default function HomepageTools() {
  const loggedIn = useSelector((state) => state.user.value)

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const enableModal = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  }

  const disableModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  }

  return (
    <div className="tools">
      <Tabs/>
      { loggedIn &&
        <button className="sushi-button" onClick={(e) => enableModal(e)}>
          Add new textbook 
          <FontAwesomeIcon icon={faPlus} />
          <SushiModal isOpen={modalIsOpen} closeModal={(e) => disableModal(e)} title={'Add new Textbook'}>
            <form className={modalStyles.modalContent}>
              <span>
                <span className={modalStyles.blockLabel}>Name</span>
                <input/>
              </span>
              <div className={modalStyles.divider} />
              <span>
                <span className={modalStyles.inlineLabel}>Private</span>
                <Toggle />
              </span>
              <div className={modalStyles.divider} />
              <div className={modalStyles.buttons}>
                <Link href='/textbooks/edit/1' passHref>
                  <button>Add</button>
                </Link>
                <button onClick={(e) => disableModal(e)}>Close</button>
              </div>
            </form>
          </SushiModal>
        </button>
      }
    </div>
  );
};
