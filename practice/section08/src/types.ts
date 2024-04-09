export type TodoItemType = {
  id : number;
  isDone : boolean; 
  content : string; 
  date : number;
}

export const nullTodoItem : TodoItemType[] = [{
  id : 0,
  isDone : false,
  content : '',
  date : 0,
}]