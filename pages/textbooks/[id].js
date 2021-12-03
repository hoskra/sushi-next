import React from "react";
import styles from '../../styles/Textbook.module.scss'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import Link from 'next/link'

import StarRating from '../../components/StarRating'
import Favourite from '../../components/Favourite'
import HeadComponent from '../../components/HeadComponent'
import TextbookMenu from "../../components/TextbookMenu";
import PageContent from "../../components/PageContent";

import { dummyTextbook } from '../../constants/data';
import { changeName } from "../../redux/pageNameSlice";
import { setCurrentTextbook, setCurrentPage } from "../../redux/textbookSlice";

export default function TextbookView() {
  const dispatch = useDispatch();
  const router = useRouter()
  const [activeItem, setActiveItem] = React.useState(0);
  const loggedIn = useSelector((state) => state.user.value)
  const txs = useSelector((state) => state.textbook.value)
  let textbook = txs[router.query.id]

  if (textbook == undefined) textbook = dummyTextbook;
  const [pageName, setpageName] = React.useState(textbook.pages[0].name);

  React.useEffect(() => {
    dispatch(changeName(textbook.title));
    dispatch(setCurrentTextbook(textbook.id));
  }, [dispatch, textbook.title]);

  const setId = (id) => {
    setActiveItem(id);
    dispatch(setCurrentPage(textbook.pages[id].id));
    setpageName(textbook.pages[id].name);
  }

  const authors = [
    "Helmut",
    "Helmutka",
    "Giovanni",
    "Šéf"
  ]

  return (
    <>
      <HeadComponent title={"SUSHI | " + textbook.title} description="SuperUltraSonicHyperInteractive TextBook" />

      <div className={styles.textbookContainer}>
        <aside>
          <TextbookMenu setId={setId} pages={textbook.pages} id={textbook.id}  setActiveItem={setActiveItem} activeItem={activeItem} />
          {loggedIn && authors.includes(textbook.author) &&
            <Link href={"/textbooks/edit/" + textbook.id} passHref>
              <button className="sushi-button">Edit</button>
            </Link>
          }
        </aside>
        <div className={styles.textbookView}>
          <h1 className={styles.title}>{textbook.title}</h1>
          <div className={styles.favourite}>
            {loggedIn && <Favourite selected={textbook.favourite} id={textbook.id}/>}
          </div>
          <span className={styles.author}>by {textbook.author}</span>
          <StarRating id={textbook.id}/>
          <h3 className={styles.pageName}>{pageName}</h3>
          <div className={styles.pageContent}>
            <PageContent page={textbook.pages[activeItem]} />
          </div>
        </div>
      </div>
    </>
  )
}
