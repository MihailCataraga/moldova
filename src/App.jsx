import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './style/index.scss';
import Anthem from './pages/Anthem';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anthem' element={<Anthem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
