import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";

import styles from '../../styles/Textbook.module.scss'
import React, { useState } from "react";
import Link from 'next/link'

import HeadComponent from "../../components/HeadComponent";
import { changeName } from "../../redux/pageNameSlice";

export default function Term() {
  const dispatch = useDispatch();
  const router = useRouter()
  const name = router.query.name

  dispatch(changeName("Create a Term"));

  return (
    <>
      <HeadComponent title={"Add term: " + name }/>
      <div className={styles.termContainer}>
        <h1 className={styles.title}>{name}</h1>
        <textarea key="1" className="sushi-input" defaultValue="" />
        <div className={styles.termActions}>
            {/* <Link href="/vocabulary" passHref> */}
              <button onClick={() => router.back()} className="sushi-button">Cancel</button>
            {/* </Link> */}
            {/* <Link href="/vocabulary" passHref> */}
              <button onClick={() => router.back()} className="sushi-button">Save</button>
            {/* </Link> */}
        </div>
      </div>
    </>
  )
}