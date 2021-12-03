import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import styles from '../../styles/Vocabulary.module.scss'
import colorStyles from '../../styles/variables.module.scss'
import React, { useState } from "react";

import HeadComponent from "../../components/HeadComponent";
import Toggle from "../../components/Toggle";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { changeName } from "../../redux/pageNameSlice";

function DDDdisplay({name}) {
    console.log(name)
  return (
    <span>{name}</span>
  )
}

export default function Vocabulary() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeName("Vocabulary"));
  }, [dispatch]);

  const router = useRouter()
  const [letter, setLetter] = useState('A');
  let txs = useSelector((state) => state.textbook.value)
  txs = Object.entries(txs).filter(textbook=>textbook[1].userId==0);

  const [selected, setSelected] = useState("all");

  let terms = []

  txs.filter(textbook => {
    let x = {
      id: textbook[1].id,
      pages: []
    }

    textbook[1].pages.forEach(page => {
      x.pages.push(page.selected)
    })

    terms.push(x)
  });

  let ter = {
    0: terms.filter(te => te.id == 0)[0]?.pages,
    3: terms.filter(te => te.id == 3)[0]?.pages,
    4: terms.filter(te => te.id == 4)[0]?.pages,
    5: terms.filter(te => te.id == 5)[0]?.pages,
    6: terms.filter(te => te.id == 6)[0]?.pages,
    7: terms.filter(te => te.id == 7)[0]?.pages,
  }

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

  let options = [{value: 'all', label: '-- All --'}];
  let optionsTxs = txs.map(it => ({
    value: it[1].id,
    label: it[1].title
  }))

  optionsTxs.forEach(element => {
      options.push(element)
  });

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
          {/* <div className={styles.group}>
            <span>Only added by me</span>
            <Toggle />
          </div> */}
          <Select height='80px' styles={customStyles} placeholder="Pick a textbook" className={styles.pageMenu}
            options={options} onChange={(e) => setSelected(e.value)}
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
          { selected == 'all' || ![0, 3, 4, 5, 6, 7].includes(selected) ?
          [...Array(5)].map((x, i) => {
            return <p key={`term_${i}`}>{`${letter}_term${i}`}</p>
          }) :

            ter[selected].map(te => {
              return <p key={`term_${te}`}>{te}</p>
            })

        }
        </div>
      </div>
    </>
  )
}
