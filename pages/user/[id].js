import React, { useState } from "react";
import {useRouter} from 'next/router';
import {useSelector, useDispatch} from "react-redux";

import styles from '../../styles/User.module.scss'
import HeadComponent from '../../components/HeadComponent'
import TextbookCard from '../../components/TextbookCard'
import { Settings } from "../../components/Settings";

import { users, userHelmut } from '../../constants/data';
import { changeName } from "../../redux/pageNameSlice";

export default function User() {
  const dispatch = useDispatch();
  const router = useRouter()
  const { isReady } = useRouter();
  const loggedIn = useSelector((state) => state.user.value)
  const currentUser = useSelector(state => state.user.data);
  const textbookId = useSelector(state => state.textbook.currentTextbook);
  const pageId = useSelector(state => state.textbook.currentPage);

  const id = router.query.id;

  let user = currentUser;

  const setUser = () => {
    if(isReady && id != 0) {
      user = users.filter(x => { if(x.id == id)  return x})[0]
    }
  }

  React.useEffect(() => {
    dispatch(changeName(user.name));
  }, [dispatch, user.name]);

  const txs = useSelector((state) => state.textbook.value)
  let textbooks = Object.entries(txs).filter(x => { if((x[1].userId == id) && (x[1].deleted == false))   return x[1]})

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
          <div className={styles.description}>{user.description}</div>
        </div>

        { list ?
          <div className={styles.textbook_list}>
            {textbooks.map((textbook, index) => (
              <TextbookCard key={index} data={textbook[1]} />
            ))}
            { textbooks.length == 0 && <div className={styles.no_textbooks}>User has no textbooks yet.</div> }
          </div>
          :

          <Settings list={list} setComponent={setComponent} />
        }
      </div>
    </>
  )
}
