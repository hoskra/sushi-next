import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';

import TextbookCard from '../components/TextbookCard'
import HomepageTools from '../components/HomepageTools'
import HeadComponent from '../components/HeadComponent'

import { changeName } from "../redux/pageNameSlice";

export default function Home() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeName(""));
  }, [dispatch]);

  const [query, setQuery] = useState('');
  const tabState = useSelector((state) => state.tab.value)
  const txs = useSelector((state) => state.textbook.value)

  return (
    <>
    <HeadComponent title="Textbooks" description="SuperUltraSonicHyperInteractive TextBook"/>

    <div>
      <div className="search-bar-container">
        <FontAwesomeIcon icon={faSearch} />
        <input className="sushi-input" placeholder="search" onChange={event => setQuery(event.target.value)} />
      </div>

    <HomepageTools/>
    <div className="textbook-list">
    {
      Object.entries(txs).filter((textbook) => {
          if(textbook[1].deleted == false ) {
            if (query === ''  ) {
              if( textbook[1].tab.includes(tabState))
                return textbook[1];
            } else if (textbook[1].title.toLowerCase().includes(query.toLowerCase()) || textbook[1].author.toLowerCase().includes(query.toLowerCase()) ) {
              return textbook[1];
            }
          }
        }).map((textbook, index) => (
          <TextbookCard key={index} data={textbook[1]} />
        ))
      }
      </div>
    </div>
    </>
  )
}

