import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";

import styles from '../../styles/Textbook.module.scss'
import React from "react";

import HeadComponent from "../../components/HeadComponent";
import { changeName } from "../../redux/pageNameSlice";

export default function Term() {
  const dispatch = useDispatch();
  const router = useRouter()
  const name = router.query.name

  React.useEffect(() => {
    dispatch(changeName("Create a Term"));
  }, [dispatch]);


  return (
    <>
      <HeadComponent title={"Add term: " + name }/>
      <div className={styles.termContainer}>
        <h1 className={styles.title}>{name}</h1>
        <textarea key="1" className="sushi-input" defaultValue="" />
        <div className={styles.termActions}>
          <button onClick={() => router.back()} className="sushi-button">Cancel</button>
          <button onClick={() => router.back()} className="sushi-button">Save</button>
        </div>
      </div>
    </>
  )
}