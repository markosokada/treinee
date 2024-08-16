import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import SignIN from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Doacao from './Pages/Doacao';

import Container from './Components/Layout/Container';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <Router>
      <nav>
      
          <NavBar />
        
      </nav>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIN" element={<SignIN />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Doacao" element={<Doacao />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;