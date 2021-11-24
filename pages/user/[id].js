import React, { useState } from "react";
import {useRouter} from 'next/router';

import styles from '../../styles/User.module.scss'
import HeadComponent from '../../components/HeadComponent'
import TextbookCard from '../../components/TextbookCard'
import {userHelmut, data} from '../../constants/data'
import Link from "next/link";
import {useSelector} from "react-redux";
import { users } from '../../constants/data';

export default function User() {
  const router = useRouter()
  const loggedIn = useSelector((state) => state.user.value)
  let user = users.filter(x => { if(x.id == router.query.id)  return x})[0]

  const [list, setComponent] = useState(true);

  if(user == undefined) {
    user = {
      id: 0,
      name: "Helmut Větvička",
      textbooks: [
        {
          id: 1,
          title: "Atlas hub",
          author: "Helmut",
          modification: "24/10/2021",
          stars: "7",
        },
        {
          id: 4,
          title: "Zahradničení",
          author: "Helmut",
          modification: "14/10/2021",
          stars: "2",
        },
      ]
    }
  }

  return (
    <>
      <HeadComponent title={"SUSHI | " + userHelmut.name} description="SuperUltraSonicHyperInteractive TextBook"/>

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
            {user.textbooks.map((textbook, index) => (
              <TextbookCard key={index} data={textbook} />
            ))}
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
