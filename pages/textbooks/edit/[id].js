import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import styles from '../../../styles/TextbookEdit.module.scss'
import HeadComponent from '../../../components/HeadComponent'
import TextbookMenu from '../../../components/TextbookMenu'
import { dummyTextbook } from '../../../constants/data'

export default function TextbookEdit() {
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState(0);
  const txs = useSelector((state) => state.textbook.value)
  let textbook = txs[router.query.id]

  if (textbook == undefined) textbook = dummyTextbook;
  const [pageName, setpageName] = React.useState(textbook.pages[0].name);
  const [textareaVal, setTextareaVal] = React.useState(textbook.pages[0].content);

  const sendPageName = (name) => {
    setpageName(name);
    if(name === "New Page") {
      setTextareaVal("");
    } else {
      let pageContent = textbook.pages.filter(x => { if(x.name == name) return x})[0].content;
      setTextareaVal(pageContent);
    }
  }

  const processOnChange = (e) => {
    setTextareaVal(e.target.value)
  }

  const processOnChangeName = (e) => {
    setpageName(e.target.value);
  }

  return (
    <>
      <HeadComponent title={"SUSHI | " + textbook.title} description="SuperUltraSonicHyperInteractive TextBook" />
      <div className={styles.textbookContainer}>
        <TextbookMenu textbook={textbook} pages={textbook.pages}
        sendPageName={sendPageName} isEdit={true} setActiveItem={setActiveItem} activeItem={activeItem} />

        <div className={styles.textbookView}>

          <input type="text" value={pageName} onChange={(e) => processOnChangeName(e)}  className={styles.newPage} />
          <textarea className="sushi-input" onChange={(e) => processOnChange(e)} value={textareaVal} />

          {pageName === "New Page" ?
            <>
              <div>
                <Link passHref href={"/textbooks/" + textbook.id} >
                  <button className="sushi-button">Save</button>
                </Link>
                <button onClick={() => {
                  sendPageName(textbook.pages[0].name);
                  setActiveItem(0);
                }}
                className="sushi-button" style={{ marginRight: '0.5em' }} >Cancel</button>
              </div>
            </>
            :
            <div>
              <Link passHref href={"/textbooks/" + textbook.id} >
                <button className="sushi-button">Save</button>
              </Link>
              <Link passHref href={"/textbooks/" + textbook.id} >
                <button className="sushi-button" style={{ marginRight: '0.5em' }}>Delete page</button>
              </Link>
            </div>
          }

        </div>
      </div>
    </>
  )
}
