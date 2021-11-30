import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import Tabs from "./Tabs";
import SushiModal from "./SushiModal";
import modalStyles from '../styles/Modal.module.scss'
import Toggle from "./Toggle";

import { addTextbook } from "../redux/textbookSlice";

export default function HomepageTools() {
  const router = useRouter();
  const loggedIn = useSelector((state) => state.user.value)
  const textbooks = useSelector((state) => state.textbook.value)
  const dispatch = useDispatch();
  const [isPrivate, setIsPrivate] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  let txs = Object.entries(textbooks);

  const enableModal = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  }

  const disableModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let getId = txs.length;
    let getCurrentDate = new Date();
    let date = getCurrentDate.toLocaleDateString('en-GB');
    dispatch(addTextbook({
        id: getId,
        title: name,
        author: "Helmut",
        modification: date,
        stars: "0",
        userId: 0,
        tab: isPrivate ? [2] : [0, 2],
        private: isPrivate,
        deleted: false,
        pages: [
          {
            name: "New Page",
            content: "",
            selected: "",
            meaning: ""
          },
        ]
      }));
     router.push(`/textbooks/edit/${getId}`);
  }

  const setPrivate = (e) => {
    setIsPrivate(e);
  }

  return (
    <div className="tools">
      <Tabs/>
      { loggedIn &&
         <button className="sushi-button" onClick={(e) => enableModal(e)}>
          Add new textbook
          <FontAwesomeIcon icon={faPlus} />
          <SushiModal isOpen={modalIsOpen} closeModal={(e) => disableModal(e)} title={'Add new Textbook'}>
            <form className={modalStyles.modalContent} onSubmit={handleSubmit}>
              <div className="sushi-input-container">
                <label className={modalStyles.blockLabel}>Name</label>
                <input name="name" className="sushi-input"/>
              </div>
              <div className="sushi-input-container">
              <div name="private" className={modalStyles.private}>
                <label className={modalStyles.inlineLabel}>Private</label>
                <Toggle setPrivate={setPrivate} />
              </div>
              </div>
              <div className={modalStyles.buttons}>
              <button type="submit" className="sushi-button">Add</button>
                <button className="sushi-button" onClick={(e) => disableModal(e)}>Close</button>
              </div>
            </form>
          </SushiModal>
         </button>
      }
    </div>
  );
};
