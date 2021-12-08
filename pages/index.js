import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faArrowCircleDown,
  faPlus,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';

import TextbookCard from '../components/TextbookCard'
import HomepageTools from '../components/HomepageTools'
import HeadComponent from '../components/HeadComponent'

import { changeName } from "../redux/pageNameSlice";
import { all } from '../redux/tabSlice'
import moment from "moment";
import {addFavourite, removeFavourite} from "../redux/textbookSlice";

export default function Home() {
  const dispatch = useDispatch();
  dispatch(changeName(""));
  const [query, setQuery] = useState('');
  const [descending, setDescending] = useState(false);
  const tabState = useSelector((state) => state.tab.value)
  const txs = useSelector((state) => state.textbook.value)

  return (
    <>
    <HeadComponent title="Textbooks" description="SuperUltraSonicHyperInteractive TextBook"/>

    <div>
      <div className="search-bar-container">
        <FontAwesomeIcon icon={faSearch} />
        <input className="sushi-input" placeholder="search" value={query} onChange={event => setQuery(event.target.value) } />
      </div>

    <HomepageTools/>
    <div className="textbook-list">
      <div id="sort_container">
        <button className="sushi-button" onClick={(e) => setDescending(!descending)}>
          <FontAwesomeIcon icon={descending ? faArrowAltCircleDown : faArrowAltCircleUp} />
        </button>
      </div>
    {
      Object.entries(txs).filter((textbook) => {
          if (query != '' && tabState != 0) {
            setQuery('')
          }

          if(textbook[1].deleted == false) {
            if (query === ''  ) {
              if (tabState == 0 && !textbook[1].private) {
                return textbook[1]
              } else if (textbook[1].tab.includes(tabState)){
                return textbook[1]
              }
            } else if (textbook[1].title.toLowerCase().includes(query.toLowerCase())
                        || textbook[1].author.toLowerCase().includes(query.toLowerCase())
                        || textbook[1].modification.replaceAll("/", "").includes(query.toLowerCase().replaceAll(".", ""))) {
              dispatch(all())
              return textbook[1];
            }
          }
        }).sort((a, b) =>
          {
            if (tabState == 1) {
              return descending ? a[1].stars < b[1].stars : a[1].stars > b[1].stars
            }
            return descending ?
                moment(a[1].modification, 'DD/MM/YYYY').isBefore(moment(b[1].modification, 'DD/MM/YYYY'))
              : moment(a[1].modification, 'DD/MM/YYYY').isAfter(moment(b[1].modification, 'DD/MM/YYYY'))
          })
          .map((textbook, index) => 
          <TextbookCard key={index} data={textbook[1]} />
        )
      }
      </div>
    </div>
    </>
  )
}

