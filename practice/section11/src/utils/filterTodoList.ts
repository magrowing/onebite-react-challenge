import { TodoItemType } from '../types';


function normalize(text : string){
  return text.trim().toLocaleLowerCase();
}

function filterTodoList(todoList : TodoItemType[], search : string){
  const query = normalize(search); 

  if(!query){
    return todoList;
  }

  return todoList.filter((todo) => normalize(todo.content).includes(query));
}


export default filterTodoList;