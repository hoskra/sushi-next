import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  search: {
    icon: <FontAwesomeIcon color='white' icon={faSearch} />,
    link: '/vocabulary'
  },
  add: {
    icon: <FontAwesomeIcon color='white' icon={faPlusCircle} />,
    link: '/term?name='
  }
};