function Controller({
  handelOnClick,
}: {
  handelOnClick: (value: number) => void;
}) {
  const numberBtn = [1, 10, 100];
  return (
    <div>
      {numberBtn.map((number) => (
        <button
          type="button"
          onClick={() => handelOnClick(-number)}
          key={`minus-btn-${number}`}
        >
          -{number}
        </button>
      ))}
      {numberBtn.reverse().map((number) => (
        <button
          type="button"
          onClick={() => handelOnClick(+number)}
          key={`pluse-btn-${number}`}
        >
          +{number}
        </button>
      ))}
    </div>
  );
}

export default Controller;
