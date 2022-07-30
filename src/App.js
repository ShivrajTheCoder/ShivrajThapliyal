
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HireMe from './Screeens/HireMe';
import HomeScreen from './Screeens/HomeScreen';
import ProjectScreen from './Screeens/ProjectScreen';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-slate-100'>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path='/projects' element={<ProjectScreen />} />
          <Route exact path='/hireme' element={<HireMe />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
