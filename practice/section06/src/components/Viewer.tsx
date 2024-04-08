function Viewer({ count }: { count: number }) {
  return (
    <div>
      <p>현재 카운트</p>
      <h2>{count}</h2>
    </div>
  );
}

export default Viewer;
