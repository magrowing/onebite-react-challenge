import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import New from './pages/New';
import Editor from './pages/Editor';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';

function App() {
  const nav = useNavigate();
  const handleClick = () => {
    nav('/new?index=100');
  };
  return (
    <>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </nav>
      <div>
        <button type="button" onClick={handleClick}>
          클릭하면 Diary 페이지로 이동
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/editor/:id" element={<Editor />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
