import styles from '../../styles/Textbook.module.scss'
import { useRouter } from 'next/router'
import Head from 'next/dist/shared/lib/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import StarRating from '../../components/StarRating'

export default function TextbookView({texbook}) {
  const router = useRouter()
  const { title, author, modification, stars } = router.query

  return (
    <>
    <Head>
      <title>{texbook.title}</title>
    </Head>
    <div className={styles.textbookConteiner}>
      <ul className={styles.pageMenu}>
        <li>First Page</li>
        <li>Second Page</li>
        <li>Third Page</li>
        <li>Fourth Page</li>
        <li>Fifth Page</li>
      </ul>

      <div className={styles.textbookView}>
        <h1 className={styles.title}>{texbook.title}</h1>
        <span className={styles.modification}>last modified {texbook.modification}</span>
        <span className={styles.author}>by {texbook.author}</span>
        <StarRating numOfStars={texbook.stars} />
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
    props: { texbook: data },
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