import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState('OFF');
  return (
    <div>
      <h1 style={{ backgroundColor: `${light === 'ON' ? 'orange' : 'gray'}` }}>
        {light === 'ON' ? 'ON' : 'OFF'}
      </h1>
      <button
        type="button"
        onClick={() => {
          setLight(light === 'ON' ? 'OFF' : 'ON');
        }}
      >
        {light === 'ON' ? '끄기' : '켜기'}
      </button>
    </div>
  );
};

export default Bulb;
