import { useRouter } from 'next/router'

import styles from '../../styles/Textbook.module.scss'
import React, { useState } from "react";
import Link from 'next/link'

import HeadComponent from "../../components/HeadComponent";

export default function Term() {
  const router = useRouter()
  const name = router.query.name

  return (
    <>
      <HeadComponent />
      <div className={styles.textbookContainer}>
      <h1 className={styles.title}>{name}</h1>
        <div className={styles.textbookView}>
            <textarea key="1" className="sushi-input" defaultValue="" />
            <div>
                <Link href="/vocabulary" passHref>
                    <button className="sushi-button">Cancel</button>
                </Link>
                <Link href="/vocabulary" passHref>
                <button onClick={() => router.back()} className="sushi-button">Save</button>
                </Link>
            </div>
        </div>
        </div>
    </>
  )
}