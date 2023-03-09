import { Route, Routes } from 'react-router-dom';
import Info from './pages/Info';
import Home from './pages/Home';
import './App.css';
import Details from './pages/Details';
import Search from './pages/Search';
import Genre from './pages/Genre';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Info/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/detail/:id' element={<Details/>}/>
      <Route path='/search/:nameid' element={<Search/>}/>
      <Route path='/genre/:genrename/:genreid' element={<Genre/>}/>
    </Routes>
    </>
  );
}

export default App;
