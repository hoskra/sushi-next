import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

import { data, filterData } from '../constants/data'
import TextbookCard from '../components/TextbookCard'
import HomepageTools from '../components/HomepageTools'
import HeadComponent from '../components/HeadComponent'

export default function Home() {
  const [query, setQuery] = useState('');
  const tabState = useSelector((state) => state.tab.value)

  return (
    <>
    <HeadComponent title="SUSHI Textbooks" description="SuperUltraSonicHyperInteractive TextBook"/>

    <div>
      <div className="search-bar-container">
        <FontAwesomeIcon icon={faSearch} />
        <input className="sushi-input" placeholder="search" onChange={event => setQuery(event.target.value)} />
      </div>

    <HomepageTools/>

    <div className="textbook-list">
      {
        data.filter(textbook => {
          if(filterData[tabState].includes(textbook.id)) {
            if (query === '') {
              return textbook;
            } else if (textbook.title.toLowerCase().includes(query.toLowerCase())) {
              return textbook;
            }
          }
        }).map((textbook, index) => (
          <TextbookCard key={index} data={textbook} />
        ))
      }
      </div>
    </div>
    </>
  )
}

