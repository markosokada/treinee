import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Campanhas from './Components/Pages/Campanhas';
import SignIN from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Doacao from './Components/Pages/Doacao';
import NovaCampanha from './Components/Pages/NovaCampanha';

import Container from './Components/Layout/Container';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height" />
      <Routes>
          <Route exactpath="/" element={<Home />} />
          <Route path="/Campanhas" element={<Campanhas />} />
          <Route path="/SignIN" element={<SignIN />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Doacao" element={<Doacao />} />
          <Route path="/NovaCampanha" element={<NovaCampanha />} />
        </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;