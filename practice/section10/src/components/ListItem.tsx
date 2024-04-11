import { memo } from 'react';

import { TodoItemType } from '../types';

type ListItemProps = {
  todo: TodoItemType;
  onDelete: (id: number) => void;
  onUpdate: (targetId: number) => void;
};

function ListItem({ todo, onDelete, onUpdate }: ListItemProps) {
  const { id, isDone, content, date } = todo;

  const handleChangeCheckBox = () => {
    onUpdate(id);
  };

  const handleDeleteItem = () => {
    onDelete(id);
  };

  return (
    <li className="ListItem">
      <input
        name="checkbox"
        type="checkbox"
        checked={isDone}
        readOnly
        onChange={handleChangeCheckBox}
      />
      <p className="content">{content}</p>
      <p className="date">{new Date(date).toLocaleDateString()}</p>
      <button type="button" onClick={handleDeleteItem}>
        삭제
      </button>
    </li>
  );
}

// export default memo(ListItem, (prevProps, nextProps) => {
//   // 반환값에 따라 props가 바뀌었는지 안바뀌었는지 판단
//   // 콜백함수의 반환값을 True로 반환하게 되면 props가 바뀌지 않았다고 판단 -> 리렌더링 X
//   // 콜백삼수의 반환값이 False로 반환하게 되면 props가 변경되었다고 판단 -> 리렌더링 O

//   if (prevProps.todo !== nextProps.todo) return false;
//   return true;
// });

export default memo(ListItem);
