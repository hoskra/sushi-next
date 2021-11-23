import React from "react";
import styles from '../../../styles/TextbookEdit.module.scss'
import stylesX from '../../../styles/Textbook.module.scss'
import modalStyles from '../../../styles/Modal.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons'

import HeadComponent from '../../../components/HeadComponent'
import TextbookMenu from '../../../components/TextbookMenu'
import Collaborators from '../../../components/Collaborators'
import Toggle from '../../../components/Toggle'
import SideSushiModal from '../../../components/SideSushiModal'
import SushiModal from '../../../components/SushiModal'

import { data } from '../../../constants/data'

export default function TextbookEdit() {
  const router = useRouter()
  let textbook = data.filter(x => { if(x.id == router.query.id)  return x})[0]
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

  const [pageName, setpageName] = React.useState("First Page");
  const sendPageName = (name)  => {
    setpageName(name)
  }

  if(textbook === undefined) {
    textbook = {
      id: 4,
      title: "Zahradničení",
      author: "Helmut",
      modification: "14/10/2021",
      stars: "2",
    }
  }

  return (
    <>
      <HeadComponent title={"SUSHI | " + textbook.title} description="SuperUltraSonicHyperInteractive TextBook"/>
      <SideSushiModal isOpen={modalIsOpen} closeModal={(e) => disableModal(e)}>
        <Collaborators onClose={(e) => disableModal(e)}/>
      </SideSushiModal>
      <div className={styles.textbookContainer}>

        <aside>
          <Link href={"/textbooks/" + textbook.id} >
            <a>
              <h1>{textbook.title}</h1>
            </a>
          </Link>

          <div className={styles.group}>
            Collaborators
            <FontAwesomeIcon icon={faUserPlus} size="2x" onClick={(e) => enableModal(e)}/>
          </div>

          <div className={styles.group}>
            <span>Private</span>
            <Toggle />
          </div>

          <TextbookMenu sendPageName={sendPageName} isEdit={true}/>

          <div className={styles.action}>
            <Link href="/vocabulary" passHref>
              <button className="sushi-button">Vocabulary</button>
            </Link>
            <button className="sushi-button" onClick={(e) => enableDeleteModal(e)}>Delete</button>

            <SushiModal isOpen={deleteModalIsOpen} closeModal={(e) => disableDeleteModal(e)} title={`Delete textbook?`}>
            <form className={modalStyles.modalContent}>
            <div className="sushi-input-container">
                <p>Given textbook will be permanently deleted.</p>
              </div>
              <div className={modalStyles.buttons}>
                <Link href={'/'} passHref>
                  <button className="sushi-button">Delete</button>
                </Link>
                <button className="sushi-button" onClick={(e) => disableDeleteModal(e)}>Cancel</button>
              </div>
            </form>
          </SushiModal>
          </div>
        </aside>

        <div className={styles.textbookView}>

          {pageName === "New Page" ?
          <>
            <input type="text" defaultValue="New Page" className={styles.newPage}/>
            <textarea key="1" className="sushi-input" defaultValue="" />
          </>
          
          :
          <>
            <h1 className={styles.title}>{pageName}</h1>
            <textarea key="2" className="sushi-input" defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Integer malesuada. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sagittis hendrerit ante. Fusce nibh. Nam sed tellus id magna elementum tincidunt. Fusce suscipit libero eget elit. Donec quis nibh at felis congue commodo. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aliquam erat volutpat. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus." />
          </>
          
          }
          {pageName === "New Page" ? 
          <>
          <div>
            <Link href={"/textbooks/" + textbook.id} >
              <button className="sushi-button">Save</button>
            </Link>
            <button onClick={() => setpageName("First Page")} className="sushi-button" style={{marginRight:'0.5em'}} >Cancel</button>
          </div>
          </>
          :
            <div>
              <Link href={"/textbooks/" + textbook.id} >
                <button className="sushi-button">Save</button>
              </Link>
              <Link href={"/textbooks/" + textbook.id} >
                <button className="sushi-button" style={{marginRight:'0.5em'}}>Delete page</button>
              </Link>
            </div>
          }
         
        </div>
      </div>
    </>
  )
}
