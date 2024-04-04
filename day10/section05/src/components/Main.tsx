import './Main.css';

export default function Main() {
  const user = {
    name: '홍길동',
    isLogin: true,
  };
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  }
  return <div>로그인</div>;
}
