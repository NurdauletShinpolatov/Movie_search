import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/:id' element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
