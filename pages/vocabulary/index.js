import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import styles from '../../styles/Vocabulary.module.scss'
import colorStyles from '../../styles/variables.module.scss'
import React, { useState } from "react";

import HeadComponent from "../../components/HeadComponent";
import Toggle from "../../components/Toggle";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Vocabulary() {
  const router = useRouter()
  const [letter, setLetter] = useState('A');
  let txs = useSelector((state) => state.textbook.value)
  txs = txs.filter(textbook=>textbook.userId==0);

  let createArrayAtoZ = _ => {
    return Array
      .apply(null, { length: 26 })
      .map((x, i) => String.fromCharCode(65 + i));
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '1em',
      borderColor: '#9f90ff',
     
    }),
    menu: (provided, state) => ({
      ...provided,
      borderRadius: '1em'
    }),
    option: (provided, state) => ({
      ...provided,
      borderRadius: '1em',
      '&:hover': {
        backgroundColor: "#f7f6ff"
      },
      backgroundColor: 'white',
      color: 'black'
    })
  }

  return (
    <>
      <HeadComponent />
      <div className={styles.textbookContainer}>
        <aside>
          <h1>Vocabulary</h1>
          <div className={styles.group}>
            <FontAwesomeIcon icon={faSearch} />
            <input className="sushi-input" placeholder="search" />
          </div>
          <div className={styles.group}>
            <span>Only added by me</span>
            <Toggle />
          </div>
          <Select height='80px' styles={customStyles} placeholder="Pick a textbook" className={styles.pageMenu} 
            options={txs.map(it => ({
              value: it.id,
              label: it.title
            }))}
            />
          <div>
            <button className="sushi-button" onClick={() => router.back()}>Back</button>
          </div>
        </aside>

        <div className={styles.textbookView}>
          <nav className={styles.alphabetNav}>
            {
              createArrayAtoZ().map(it => {
                return <a key={`nav${it}`} onClick={event => setLetter(it)}>{it}</a>
              })
            }
          </nav>
          {[...Array(20)].map((x, i) => {
            return <p key={`term_${i}`}>{`${letter}_term${i}`}</p>
          })}
        </div>
      </div>
    </>
  )
}
