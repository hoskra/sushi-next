import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";

import styles from '../../styles/Textbook.module.scss'
import React from "react";

import HeadComponent from "../../components/HeadComponent";
import { changeName } from "../../redux/pageNameSlice";
import { createTerm } from "../../redux/textbookSlice";

export default function Term() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isReady } = useRouter()
  let name = "";
  let pageId = 0;
  let textbookId = 0;
  const [term, setTerm] = React.useState('')

  if(isReady) {
    name = router.query.name;
    pageId = router.query.pid;
    textbookId = router.query.tid;
  }

  React.useEffect(() => {
    dispatch(changeName("Create a Term"));
  }, [dispatch]);

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  const submitTerm = () => {
    dispatch(createTerm({textbookId, pageId, selected: name, meaning: term}))
  }

  return (
    <>
      <HeadComponent title={"Add term: " + name }/>
      <div className={styles.termContainer}>
        <h1 className={styles.title}>{name}</h1>
        <textarea key="1" className="sushi-input" value={term} onChange={(e) => handleChange(e)} />
        <div className={styles.termActions}>
          <button onClick={() => router.back()} className="sushi-button">Cancel</button>
          <button onClick={() => {
            submitTerm();
            router.back();
          }} className="sushi-button">Save</button>
        </div>
      </div>
    </>
  )
}