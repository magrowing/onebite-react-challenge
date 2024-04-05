import './App.css';
import OrderEditor from './components/OrderEditor';
import Welcome from './components/Welcome';

function App() {
  const user = {
    name: '홍길동',
    isMember: false,
  };
  return (
    <>
      <Welcome {...user} />
      <OrderEditor />
    </>
  );
}

export default App;
