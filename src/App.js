import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Servicepage/Service';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
