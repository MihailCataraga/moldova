import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './style/index.scss';
import Anthem from './pages/Anthem';
import Locations from './pages/Locations';
import Location from './pages/Location';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anthem' element={<Anthem />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/locations/:name' element={<Location />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
