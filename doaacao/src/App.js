import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import SignIN from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Doacao from './Components/Pages/Doacao';
import NewProject from './Components/Pages/NewProject';

import Container from './Components/Layout/Container';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/SignIN" element={<SignIN />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Doacao" element={<Doacao />} />
        <Route path="/NewProject" element={<NewProject />} />
      </Routes>

      </Container>
      <Footer />
    </Router>
  );
}

export default App;