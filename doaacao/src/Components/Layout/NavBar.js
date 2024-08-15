import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar(){
    return(
        <ul className={styles.list}>

        <li className={styles.item}>
          <Link to ="/Home">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to ="/SignIn">Sign in</Link>
        </li>
        <li className={styles.item}>
          <Link to ="/SignUP">Sign up</Link>
        </li>
        <li className={styles.item}>
          <Link to ="/Doacao">Doacao</Link>
        </li>
      </ul>

    )
}
export default NavBar