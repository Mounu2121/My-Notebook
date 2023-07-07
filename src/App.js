
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";
import  NoteState from './context/noteState';
function App() {
  return (
      <>
      <NoteState>  

      <Router>
        <Navbar/>
        <div className="container">
        <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route  path="/about" element={<About/>}></Route>
    <Route  path="/login" element={<Login/>}></Route>
    <Route  path="/signup" element={<SignUp/>}></Route>

    </Routes>
    </div>
      </Router>
      </NoteState>

      </>
  )
}

export default App;
