import styles from '../../../styles/TextbookEdit.module.scss'
import stylesX from '../../../styles/Textbook.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons'

import HeadComponent from '../../../components/HeadComponent'
import TextbookMenu from '../../../components/TextbookMenu'
import Toggle from '../../../components/Toggle'

import { data } from '../../../constants/data'

export default function TextbookEdit() {
  const router = useRouter()
  let textbook = data.filter(x => { if(x.id == router.query.id)  return x})[0]

  if(textbook == undefined) {
    textbook = {
      id: 4,
      title: "Zahradničení",
      author: "Helmut",
      modification: "14/10/2021",
      stars: "2",
    }
  }

  return (
    <>
      <HeadComponent title={"SUSHI | " + textbook.title} description="SuperUltraSonicHyperInteractive TextBook"/>

      <div className={styles.textbookContainer}>

        <aside>
          <Link href={"/textbooks/" + textbook.id} >
            <a>
              <h1>{textbook.title}</h1>
            </a>
          </Link>

          <div className={styles.group}>
            Collaborators
            <FontAwesomeIcon icon={faUserPlus} size="2x" />
          </div>

          <div className={styles.group}>
            <span>Private</span>
            <Toggle />
          </div>

          <TextbookMenu isEdit={true} />

          <div className={styles.action}>
            <Link href="/vocabulary" passHref>
              <button className="sushi-button">Vocabulary</button>
            </Link>
            <button className="sushi-button">Delete</button>
          </div>
        </aside>

        <div className={styles.textbookView}>
          <h1 className={styles.title}>First Page</h1>
          <textarea className="sushi-input"
          defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Integer malesuada. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sagittis hendrerit ante. Fusce nibh. Nam sed tellus id magna elementum tincidunt. Fusce suscipit libero eget elit. Donec quis nibh at felis congue commodo. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aliquam erat volutpat. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus."
          />
          <Link href={"/textbooks/" + textbook.id} >
            <button className="sushi-button">Save</button>
          </Link>
        </div>
      </div>
    </>
  )
}
