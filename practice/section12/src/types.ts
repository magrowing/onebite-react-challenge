export type TodoItemType = {
  id : number, 
  createdDate : number, 
  emotionId : number, 
  content : string,
}

export type ActionType = {
  type: string;
  data?: TodoItemType;
  id?: number;
};

