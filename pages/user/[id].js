import React, { useState } from "react";
import {useRouter} from 'next/router';
import {useSelector} from "react-redux";

import styles from '../../styles/User.module.scss'
import HeadComponent from '../../components/HeadComponent'
import TextbookCard from '../../components/TextbookCard'

import { users, userHelmut } from '../../constants/data';

export default function User() {
  const router = useRouter()
  const { isReady } = useRouter();
  const loggedIn = useSelector((state) => state.user.value)
  const id = router.query.id;

  let user = userHelmut;

  const setUser = () => {
    if(isReady) {
      user = users.filter(x => { if(x.id == id)  return x})[0]
    }    
  }
  const txs = useSelector((state) => state.textbook.value)
  let textbooks = txs.filter(x => { if(x.userId == id)  return x})
  textbooks = textbooks.filter(x => { if(x.deleted == false)  return x})

  const [list, setComponent] = useState(true);

  return (
    <>
    {setUser()}
      <HeadComponent title={"SUSHI | " + user.name} description="SuperUltraSonicHyperInteractive TextBook"/>

      <div className={styles.container}>
        <div className={styles.user_info}>
          <div className={styles.photo}></div>
          {
            loggedIn && user.id == 0 ?
              <button className="sushi-button"
                      onClick={() => {list && setComponent(false)}}>
                {list ? <span>Settings</span> : <span>Upload photo</span> }
              </button>
              : <></>
          }
          <h2 className={styles.name}>{user.name}</h2>
          <div className={styles.description}>{userHelmut.description}</div>
        </div>

        { list ?
          <div className={styles.textbook_list}>
            {textbooks.map((textbook, index) => (
              <TextbookCard key={index} data={textbook} />
            ))}
            { textbooks.length == 0 && <div className={styles.no_textbooks}>User has no textbooks yet.</div> }
          </div>
          :
          <form>
            <div className="sushi-input-container">
              <label>Email</label>
              <input className="sushi-input" type="text"  defaultValue={userHelmut.email}/>
            </div>
            <div className="sushi-input-container">
              <label>Password</label>
              <input className="sushi-input" autoComplete="cc-csc" type="password" defaultValue={userHelmut.password} />
            </div>
            <div className="sushi-input-container">
              <label>Name</label>
              <input className="sushi-input" type="text" defaultValue={userHelmut.name}/>
            </div>
            <div className="sushi-input-container">
              <label>Description</label>
              <textarea className="sushi-input" autoComplete="cc-csc" type="text" defaultValue={userHelmut.description}></textarea>
            </div>
            <div className={styles.save_button}>
              <button type="button" className="sushi-button"
                      onClick={() => {!list && setComponent(true)}}>
                Save
              </button>
            </div>
          </form>
        }
      </div>
    </>
  )
}
