import Link from 'next/link'
import styles from '../../styles/User.module.scss'

import Textbook from '../textbooks'

const data = [
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

export default function User() {
  return (
    <div className={styles.container}>
      <div className={styles.user_info}>
        <div className={styles.photo}></div>
        <button className="sushi-button">Settings</button>
        <h2 className={styles.name}>Helmut Větvička</h2>
        <div className={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.</div>
      </div>

      <div className={styles.textbook_list}>
        {data.map((textbook, index) => (
          <Textbook key={index} data={textbook} />
          ))}
      </div>
    </div>
  )
}