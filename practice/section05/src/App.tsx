import './App.css';

import Button from './components/Button';

function App() {
  const buttonProps = {
    text: '메일',
    color: 'red',
  };
  return (
    <div>
      <Button {...buttonProps} />
      <Button text={'카페'} />
      <Button text={'블로그'}>
        <div>자식 Children</div>
      </Button>
    </div>
  );
}

export default App;
