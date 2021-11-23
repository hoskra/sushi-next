import React from "react";
import styles from '../../styles/Textbook.module.scss'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import StarRating from '../../components/StarRating'
import Favourite from '../../components/Favourite'
import HeadComponent from '../../components/HeadComponent'

import { data } from '../../constants/data'
import TextbookMenu from "../../components/TextbookMenu";
import SideSushiModal from '../../components/SideSushiModal'
import SelectedMenu from '../../components/selectedmenu/index';


export default function TextbookView() {
  const router = useRouter()
  const loggedIn = useSelector((state) => state.user.value)
  let textbook = data.filter(x => { if(x.id == router.query.id)  return x})[0]

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const enableModal = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  }

  const disableModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  }

  const [pageName, setpageName] = React.useState("First Page");
  const sendPageName = (name)  => {
    setpageName(name)
  }

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
          { loggedIn && textbook.author == "Helmut" &&
          <Link href={"/textbooks/edit/" + textbook.id} passHref>
            <button className="sushi-button">Edit</button>
          </Link>
          }

          <TextbookMenu sendPageName={sendPageName}/>
        </aside>
        <div className={styles.textbookView}>
          <h1 className={styles.title}>{textbook.title}</h1>
          <div className={styles.favourite}>
            {loggedIn && <Favourite />}
          </div>
          <span className={styles.author}>by {textbook.author}</span>
          <StarRating numOfStars={textbook.stars}/>
          <h3 className={styles.pageName}>{pageName}</h3>
          <div className={styles.pageContent}>
          <SelectedMenu  items={['search', 'add']}> 
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Nullam rhoncus aliquam metus. Aliquam erat volutpat.&nbsp;</SelectedMenu><span onClick={(e) => enableModal(e)} className={styles.term}>Pellentesque ipsum.</span>
            <SideSushiModal isOpen={modalIsOpen} closeModal={(e) => disableModal(e)} title={'Pellentesque ipsum.'}>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam rhoncus aliquam metus. Aliquam erat volutpat. Pellentesque ipsum. Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Integer malesuada. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Cum sociis natoque penatibus et magnis Curabitur sagittis hendrerit ante.</p>
            </SideSushiModal><SelectedMenu className={styles.pageContent} items={['search', 'add']}>Pellentesque arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.
             Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus.
             Integer malesuada. In laoreet, magna id viverra tincidunt, sem odio bibendum justo,
             vel imperdiet sapien wisi sed libero. Cum sociis natoque penatibus et magnis
             Curabitur sagittis hendrerit ante.
             Fusce nibh. Nam sed tellus id magna elementum tincidunt. Fusce
             suscipit libero eget elit. Donec quis nibh at felis congue commodo.
             Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.
             Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aliquam erat volutpat.
             Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus.
             </SelectedMenu>
              {/* <span onClick={(e) => enableModal(e)} className={styles.term}>Aliquam erat volutpat.</span> */}
            {/* <SideSushiModal isOpen={modalIsOpen} closeModal={(e) => disableModal(e)} title={'Aliquam erat volutpat.'}>
              sssssssssssssssssssssssssssssssss
              sssssssssssssssssssssssssssssssss
              sssssssssssssssssssssssssssssssss
              sssssssssssssssssssssssssssssssss
              sssssssssssssssssssssssssssssssss
              sssssssssssssssssssssssssssssssss
              sssssssssssssssssssssssssssssssss
              sssssssssssssssssssssssssssssssss
              sssssssssssssssssssssssssssssssss
            </SideSushiModal> */}
             </div>
        </div>
      </div>
    </>
  )
}
