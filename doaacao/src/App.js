import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Doacao from './Pages/Doacao';
import NavBar from './Components/Layout/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/doacao" element={<Doacao />} />
      </Routes>
      
    </Router>
  );
}

export default App;