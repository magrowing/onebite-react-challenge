export type TodoItemType = {
  id : number;
  isDone : boolean; 
  content : string; 
  date : number;
}

export const nullTodoItem : TodoItemType = {
  id : 0,
  isDone : false,
  content : '',
  date : 0,
}


export type ActionType = {
  type: string;
  data?: TodoItemType;
  targetId?: number;
};


export type DispatchContextType = {
  onCreate: (value: string) => void;
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
};