import React from "react";
import styles from '../../styles/Textbook.module.scss'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import StarRating from '../../components/StarRating'
import Favourite from '../../components/Favourite'
import HeadComponent from '../../components/HeadComponent'
import TextbookMenu from "../../components/TextbookMenu";
import PageContent from "../../components/PageContent";

import { dummyTextbook } from '../../constants/data';

export default function TextbookView() {
  const router = useRouter()
  const [activeItem, setActiveItem] = React.useState(0);
  const loggedIn = useSelector((state) => state.user.value)
  const txs = useSelector((state) => state.textbook.value)
  let textbook = txs[router.query.id]

  if (textbook == undefined) textbook = dummyTextbook;
  const [pageName, setpageName] = React.useState(textbook.pages[0].name);
  const [pageContent, setPageContent] = React.useState(textbook.pages[0]);

  const sendPageName = (name) => {
    setpageName(name)
    setPageContent(textbook.pages.filter(x => { if(x.name == name) return x})[0]);
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
          <TextbookMenu sendPageName={sendPageName} pages={textbook.pages} setActiveItem={setActiveItem} activeItem={activeItem} />
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
            <PageContent page={pageContent} />
          </div>
        </div>
      </div>
    </>
  )
}
