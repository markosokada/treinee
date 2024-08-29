import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
<<<<<<< HEAD
import Home from './Pages/Home';
import SignIN from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Doacao from './Pages/Doacao';
=======
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import SignIN from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Doacao from './Components/Pages/Doacao';
import NewProject from './Components/Pages/NewProject';
>>>>>>> 0c70509 (formulario terminado necessitando de ajustes no CSS, inicio do banco de dados.)

import Container from './Components/Layout/Container';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
      <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="/SignIN" element={<SignIN />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Doacao" element={<Doacao />} />
        </Routes>
=======
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/SignIN" element={<SignIN />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Doacao" element={<Doacao />} />
        <Route path="/NewProject" element={<NewProject />} />
      </Routes>
>>>>>>> 0c70509 (formulario terminado necessitando de ajustes no CSS, inicio do banco de dados.)
      </Container>
      <Footer />
    </Router>
  );
}

export default App;