import Head from 'next/head'
import Textbook from './textbooks'
import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
const data = [
  {
    id: 1,
    title: "Atlas hub",
    author: "Helmut",
    modification: "24/10/2021",
    stars: "7",
    shared: false,
    trending: false,
    myTextbook: true,
    favourites: false
  },
  {
    id: 2,
    title: "Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    modification: "5/3/1979",
    stars: "42",
    shared: false,
    trending: false,
    myTextbook: false,
    favourites: true
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    author: "Giovanni",
    modification: "12/12/135",
    stars: "2",
    shared: true,
    trending: false,
    myTextbook: false,
    favourites: false
  },
  {
    id: 4,
    title: "Zahradničení",
    author: "Helmut",
    modification: "14/10/2021",
    stars: "2",
    shared: true,
    trending: false,
    myTextbook: false,
    favourites: false
  },
]

export default function Home() {
  const [query, setQuery] = useState('')

  return (
    <>
    <Head>
      <title>SUSHI Textbooks</title>
      <meta name="description" content="SUSHI Textbooks" />
      <link rel="icon" href="/sushi.svg" />
    </Head>

    <div>
      <div className="search-bar-container">
        <FontAwesomeIcon icon={faSearch} />
        <input className="search-bar" placeholder="search" onChange={event => setQuery(event.target.value)} />
      </div>

      <div className="tools">
      <ul className="bookmarks">
        <li>Trending</li>
        <li>Shared with me</li>
        <li>My textbooks</li>
        <li>Favourites</li>
      </ul>

        <button className="sushi-button">Add new textbook <FontAwesomeIcon icon={faPlus} /> </button>
      </div>

    <div className="textbook-list">
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
    </div>
    </>
  )
}

