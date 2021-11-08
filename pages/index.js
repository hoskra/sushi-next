import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Textbook from './textbooks'
import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Atlas hub",
    author: "Helmut",
    modification: "24/10/2021",
    stars: "7",
  },
  {
    id: 2,
    title: "Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    modification: "5/3/1979",
    stars: "42",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    author: "Giovanni",
    modification: "12/12/135",
    stars: "2",
  }
]

export default function Home() {

  const [query, setQuery] = useState('')

  return (
    <>
    <Head>
      <title>SUSHI Textbooks</title>
      <meta name="description" content="SUSHI Textbooks" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <div>
      <input placeholder="Search" onChange={event => setQuery(event.target.value)} />
    {
      data.filter(textbook => {
        if (query === '') {
          return textbook;
        } else if (textbook.title.toLowerCase().includes(query.toLowerCase())) {
          return textbook;
        }
      }).map((textbook, index) => (
        <Textbook key={index} data={textbook} />
      ))
    }
    </div>
    </>
  )
}

