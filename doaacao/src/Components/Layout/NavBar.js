import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../Components/Layout/image/icon/doacao.png'

function NavBar(){
    return(
        <nav>
          <Container>
            <Link to="/"> <img src={logo} alt="Doaacao" 
            style={{ width: '100px', height: 'auto' }} /></Link>
            
          <ul className={styles.list}>
            <li className={styles.item}><Link to ="/">Home</Link></li>
            <li className={styles.item}><Link to ="/Projects">Campanhas</Link></li>
            <li className={styles.item}><Link to ="/SignIn">SignIn</Link></li>
            <li className={styles.item}><Link to ="/SignUP">SignUp</Link></li>
            <li className={styles.item}><Link to ="/Doacao">Doacao</Link></li>
            <li className={styles.item}><Link to ="/NewProject">Nova Campanha</Link></li>

          </ul>
          </Container>
        </nav>
    )
}
export default NavBar