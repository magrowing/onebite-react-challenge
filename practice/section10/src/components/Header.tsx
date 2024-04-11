import { memo } from 'react';

function Header() {
  return (
    <section className="Header">
      <h3> 📅 Today is</h3>
      <h2>
        {new Date().toLocaleDateString()}{' '}
        {new Date().toDateString().slice(0, 3)}
      </h2>
    </section>
  );
}

export default memo(Header);
