import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../Components/Layout/image/icon/doacao.png'

function NavBar(){
    return(
        <nav>
          <Container>
            <Link to="/"> <img src={logo} alt="Doaacao"/></Link>
            
          <ul className={styles.list}>

            <li className={styles.item}><Link to ="/Home">Home</Link></li>
            <li className={styles.item}><Link to ="/SignIn">Sign in</Link></li>
            <li className={styles.item}><Link to ="/SignUP">Sign up</Link></li>
            <li className={styles.item}><Link to ="/Doacao">Doacao</Link></li>

          </ul>
          </Container>
        </nav>
    )
}
export default NavBar