import logo from './logo.svg';
import './App.css';
import Home from './Cmponent/Home';
import Login from './Cmponent/Login';
import Register from './Cmponent/Register';
import Contact from './Cmponent/Contact';
import About from './Cmponent/About';
import Navbar from './Cmponent/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <Navbar/>
     <Routes>
      <Route  exact path='/' element={<Home/>} />
      <Route  exact path='/about' element={<About/>} />
      <Route  exact path='/contact' element={<Contact/>} />
      <Route  exact path='/register' element={<Register/>} />
      <Route  exact path='/login' element={<Login/>} />



     </Routes>
    </div>
  );
}

export default App;
