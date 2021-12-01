import React from 'react';
import SideSushiModal from './SideSushiModal';
import SelectedMenu from './selectedmenu';
import styles from '../styles/Textbook.module.scss';

export default function PageContent({ page }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const enableModal = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  }

  const disableModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  }

  let pageContent = page.content;
  let selected = page.selected;
  let meaning = page.meaning;

  let index, beforeSelected, afterSelected;


  index = pageContent.indexOf(selected);
  if (index !== -1) {
    beforeSelected = pageContent.slice(0, index);
    afterSelected = pageContent.slice(index + selected.length);
  }

  console.log(index)

  return (
    <>
      {index !== -1 ?
        <>
          <SelectedMenu items={['search', 'add']}>
            {beforeSelected}
          </SelectedMenu>

          <span onClick={(e) => enableModal(e)} className={styles.term}>{selected}</span>

          <SideSushiModal isOpen={modalIsOpen} closeModal={(e) => disableModal(e)} title={selected}>
            {meaning}
          </SideSushiModal>

          <SelectedMenu className={styles.pageContent} items={['search', 'add']}>
            {afterSelected}
          </SelectedMenu>
        </>
        :
        <>
          {pageContent}
        </>
      }
    </>
  );
}