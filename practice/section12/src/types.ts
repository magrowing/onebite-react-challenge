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

export type onCreateType = {
  createdDate : Date, 
  emotionId : number, 
  content : string,
}

export type onUpdateType = {
  id: number;
  createdDate : Date, 
  emotionId : number, 
  content : string,
}

export type onSubmitType = {
  id?: number;
  createdDate : Date | number, 
  emotionId : number, 
  content : string,
}

export type DispatchType = {
  onCreate : ( createdDate: number,
    emotionId: number,
    content: string) => void;
  onUpdate : (  id: number,
    createdDate: number,
    emotionId: number,
    content: string) => void;
  onDelete : (id: number) => void;
}


export const nullCurDiaryItem : TodoItemType ={
  id : -1, 
  createdDate : 0, 
  emotionId : 1, 
  content : '',
}