import styles from '../../styles/Textbook.module.scss'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import StarRating from '../../components/StarRating'
import Favourite from '../../components/Favourite'
import HeadComponent from '../../components/HeadComponent'

export default function TextbookView({textbook}) {
  const router = useRouter()
  const { title, author, modification, stars } = router.query
  const loggedIn = useSelector((state) => state.user.value)

  return (
    <>
      <HeadComponent title={"SUSHI | " + textbook.title} description="SuperUltraSonicHyperInteractive TextBook"/>

      <div className={styles.textbookConteiner}>

        <aside> 
          { loggedIn && textbook.author == "Helmut" && 
          <Link href={"/textbooks/edit/" + textbook.id} passHref>
            <button className="sushi-button">Edit</button>
          </Link>
          }
          <ul className={styles.pageMenu}>
            <li>First Page</li>
            <li>Second Page</li>
            <li>Third Page</li>
            <li>Fourth Page</li>
            <li>Fifth Page</li>
          </ul>
        </aside>

        <div className={styles.textbookView}>
          <h1 className={styles.title}>{textbook.title}</h1>
          <Favourite />
          <span className={styles.author}>by {textbook.author}</span>
          <StarRating numOfStars={textbook.stars}/>
          <span className={styles.pageName}>First Page</span>
          <p className={styles.pageContent}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Integer malesuada. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sagittis hendrerit ante. Fusce nibh. Nam sed tellus id magna elementum tincidunt. Fusce suscipit libero eget elit. Donec quis nibh at felis congue commodo. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aliquam erat volutpat. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus.</p>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`)
  const data = await req.json()

  return {
    props: { textbook: data },
  }
}

export async function getStaticPaths() {
  const req = await fetch('http://localhost:3000/textbooks.json')
  const data = await req.json()

  const paths = data.map(textbook => {
    return { params: { id: textbook, }, }
  })

  return {
    paths,
    fallback: false,
  }
}