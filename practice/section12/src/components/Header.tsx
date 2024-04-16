import { ReactNode } from 'react';
import '../styles/Header.scss';

type HeaderProps = {
  title: string;
  leftChild: ReactNode;
  rightChild: ReactNode;
};

export default function Header({ title, leftChild, rightChild }: HeaderProps) {
  return (
    <header className="Header">
      <div className="Header__left">{leftChild}</div>
      <h2 className="Header__center">{title}</h2>
      <div className="Header__right">{rightChild}</div>
    </header>
  );
}
