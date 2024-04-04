import './App.css';
import Welcome from './components/Welcome';

function App() {
  const user = {
    name: '홍길동',
    isMember: false,
  };
  return <Welcome {...user} />;
}

export default App;
