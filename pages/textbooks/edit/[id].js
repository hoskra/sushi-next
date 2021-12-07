import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import styles from '../../../styles/TextbookEdit.module.scss'
import HeadComponent from '../../../components/HeadComponent'
import TextbookMenu from '../../../components/TextbookMenu'
import { dummyTextbook } from '../../../constants/data'
import { changeName } from "../../../redux/pageNameSlice";
import { addPage, editPage, removePage } from "../../../redux/textbookSlice";

export default function TextbookEdit() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState(0);
  const txs = useSelector((state) => state.textbook.value)
  let textbook = txs[router.query.id]

  if (textbook == undefined) textbook = dummyTextbook;
  const [pageName, setpageName] = React.useState(textbook.pages[0].name);
  const [textareaVal, setTextareaVal] = React.useState(textbook.pages[0].content);
  React.useEffect(() => {
    dispatch(changeName(textbook.title));
  }, [dispatch, textbook.title]);

  const setId = (id) => {
    setActiveItem(id);
    
    if(id === textbook.pages.lenght) {
      setpageName('');
      setTextareaVal('');
    } 
    else {
      setpageName(textbook.pages[id].name);
      setTextareaVal(textbook.pages[id].content);
    }
  }

  const processOnChange = (e) => {
    setTextareaVal(e.target.value)
  }

  const processOnChangeName = (e) => {
    setpageName(e.target.value);
  }

  const addPageToTextbook = () => {
    let getHighestId = Math.max(...textbook.pages.map(x => x.id)) + 1;
    let newPage = {
      id: getHighestId,
      name: pageName,
      content: textareaVal,
      selected: "",
      meaning: ""
    }
    dispatch(addPage({textbookId: router.query.id, page: newPage}));
  }

  const deletePageFromTextbook = () => {
    if(textbook.pages.length > 1) {
      dispatch(removePage({textbookId: router.query.id, pageId: textbook.pages[activeItem].id}));
    } else {
      alert("You cannot delete the last page!");
    }
  }

  const editTextbookPage = () => {
    dispatch(editPage({textbookId: router.query.id, pageId: textbook.pages[activeItem].id, name: pageName, content : textareaVal}));
  }

  return (
    <>
      <HeadComponent title={"SUSHI | " + textbook.title} description="SuperUltraSonicHyperInteractive TextBook" />
      <div className={styles.textbookContainer}>
        <TextbookMenu textbook={textbook} id={router.query.id} pages={textbook.pages} setId={setId}
         isEdit={true} setActiveItem={setActiveItem} activeItem={activeItem} />

        <div className={styles.textbookView}>

          <input type="text" value={pageName} placeholder="New page" onChange={(e) => processOnChangeName(e)}  className={styles.newPage} />
          <textarea className="sushi-input" onChange={(e) => processOnChange(e)} value={textareaVal} />

          {activeItem === textbook.pages.lenght ?
            <>
              <div>
                <Link passHref href={"/textbooks/edit/" + textbook.id} >
                  <button className="sushi-button"
                  onClick={() => {
                    addPageToTextbook();
                    setActiveItem(textbook.pages.length);
                  }}>Create page</button>
                </Link>
                <button onClick={() => {
                  setId(0);
                }}
                className="sushi-button "  style={{ marginRight: '0.5em' }} >Cancel</button>
              </div>
            </>
            :
            <div>
              <Link passHref href={"/textbooks/edit/" + textbook.id} >
                <button className={"sushi-button " + styles.save } onClick={() => {
                    editTextbookPage();
                }}>Save</button>
              </Link>
              <Link passHref href={"/textbooks/edit/" + textbook.id} >
                <button className="sushi-button " style={{ marginRight: '0.5em' }}
                  onClick={()=> {
                    deletePageFromTextbook();
                    setId(0);
                  }} >Delete page</button>
              </Link>
            </div>
          }

        </div>
      </div>
    </>
  )
}
