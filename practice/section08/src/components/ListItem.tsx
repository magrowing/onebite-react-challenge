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

export default ListItem;
