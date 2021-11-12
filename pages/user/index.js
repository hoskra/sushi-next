import styles from '../../styles/User.module.scss'

import HeadComponent from '../../components/HeadComponent'
import TextbookCard from '../../components/TextbookCard'

import { userHelmut, dataHelmut } from '../../constants/data'

export default function User() {
  return (
    <>
    <HeadComponent title={"SUSHI | " + userHelmut.name} description="SuperUltraSonicHyperInteractive TextBook"/>

    <div className={styles.container}>
      <div className={styles.user_info}>
        <div className={styles.photo}></div>
        <button className="sushi-button">Settings</button>
        <h2 className={styles.name}>{userHelmut.name}</h2>
        <div className={styles.description}>{userHelmut.description}</div>
      </div>

      <div className={styles.textbook_list}>
        {dataHelmut.map((textbook, index) => (
          <TextbookCard key={index} data={textbook} />
          ))}
      </div>
    </div>
    </>
  )
}