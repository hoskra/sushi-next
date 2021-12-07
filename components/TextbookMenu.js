import React from 'react';
import styles from '../styles/TextbookMenu.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

import Toggle from './Toggle';
import Collaborators from './Collaborators';
import SideSushiModal from './SideSushiModal';
import DeleteTextbook from './DeleteTextbook';
import SushiModal from './SushiModal';

export default function TextbookMenu({ isEdit, setId, sendPageName, textbook, pages, id, setActiveItem, activeItem }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [deleteModalIsOpen, setDeleteModalOpen] = React.useState(false);

  const enableModal = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  }

  const disableModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  }

  const enableDeleteModal = (e) => {
    e.stopPropagation();
    setDeleteModalOpen(true);
  }

  const disableDeleteModal = (e) => {
    e.stopPropagation();
    setDeleteModalOpen(false);
  }


  return (
    <aside className={styles.menu}>
      {isEdit &&
        <>
          <SideSushiModal isOpen={modalIsOpen} closeModal={(e) => disableModal(e)}>
            <Collaborators onClose={(e) => disableModal(e)} />
          </SideSushiModal>

          <Link href={"/textbooks/" + textbook.id} >
            <a>
              <h1>{textbook.title}</h1>
            </a>
          </Link>

          <div className={styles.group}>
            Collaborators
            <FontAwesomeIcon className={styles.icons} icon={faUserPlus} size="2x" onClick={(e) => enableModal(e)} />
          </div>

          <div className={styles.group}>
            <span>Private</span>
            <Toggle isChecked={textbook.private} id={textbook.id} />
          </div>
        </>
      }
      <ul className={`${styles.pageMenu} ${isEdit ? styles.pageMenuEdit : ''}`}>
      {isEdit &&
        <li  className={pages.lenght === activeItem ? styles.active : ''}
          onClick={() => {
            // setActiveItem(pages.lenght);
            // sendPageName("New Page");
            setId(pages.lenght);
        }} >
          New Page <FontAwesomeIcon icon={faPlus} />
        </li> }
        {
          pages.map((page, index) => (
            <li key={index}
            onClick={() => {
              // setActiveItem(index);
              // sendPageName(page ? page.name : "");
              setId(index);
            }}
              className={index === activeItem ? styles.active : ''} >
              {page ? page.name : ""}
            </li>
          ))
        }
      
      </ul>
      {isEdit &&
        <div className={styles.action}>
          <Link href="/vocabulary" passHref>
            <button className={"sushi-button " + styles.vocabulary }>Vocabulary</button>
          </Link>
          <button className="sushi-button" onClick={(e) => { enableDeleteModal(e); }}> Delete textbook</button>
          <SushiModal isOpen={deleteModalIsOpen} closeModal={(e) => disableDeleteModal(e)} title={`Delete textbook?`}>
            <DeleteTextbook id={textbook.id} disableDeleteModal={disableDeleteModal} />
          </SushiModal>
        </div>
      }

    </aside>
  )
}