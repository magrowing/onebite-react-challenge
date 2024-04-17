import { ReactNode } from 'react';

import '../styles/Header.scss';

type HeaderProps = {
  title: string;
  leftChild: ReactNode;
  rightChild: ReactNode;
};

function Header({ title, leftChild, rightChild }: HeaderProps) {
  return (
    <header className="Header">
      <div className="Header__left">{leftChild}</div>
      <div className="Header__center">{title}</div>
      <div className="Header__right">{rightChild}</div>
    </header>
  );
}

export default Header;
