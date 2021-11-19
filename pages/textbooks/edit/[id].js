import styles from '../../../styles/TextbookEdit.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons'

import HeadComponent from '../../../components/HeadComponent'
import Toggle from '../../../components/Toggle'

export default function TextbookEdit({textbook}) {
  const router = useRouter()

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

          <ul className={styles.pageMenu}>
            <li>First Page</li>
            <li>Second Page</li>
            <li>Third Page</li>
            <li>Fourth Page</li>
            <li>Fifth Page</li>
            <li>Create New Page <FontAwesomeIcon icon={faPlus}/></li>
          </ul>

          <div className={styles.action}>
            <Link href="/vocabulary" passHref>
            <button className="sushi-button">Vocabulary</button>
            </Link>
            <button className="sushi-button">Delete</button>
          </div>
        </aside>

        <div className={styles.textbookView}>
          <h1 className={styles.title}>First Page</h1>
          <textarea className={styles.pageContent}
          defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Integer malesuada. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sagittis hendrerit ante. Fusce nibh. Nam sed tellus id magna elementum tincidunt. Fusce suscipit libero eget elit. Donec quis nibh at felis congue commodo. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aliquam erat volutpat. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus."
          />

          <button className="sushi-button">Save</button>
        </div>



      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const req = await fetch( process.env.NODE_ENV === "production" ?
    `https://sushi.netlify.app/${params.id}.json` : `http://localhost:3000/${params.id}.json` )
  const data = await req.json()

  return {
    props: { textbook: data },
  }
}

export async function getStaticPaths() {
  const req = await fetch( process.env.NODE_ENV === "production" ?
  "https://sushi.netlify.app/textbooks.json" : "http://localhost:3000/textbooks.json" )
  const data = await req.json()

  const paths = data.textbooks.map(textbook => {
    return { params: { id: textbook, }, }
  })

  return {
    paths,
    fallback: false,
  }
}