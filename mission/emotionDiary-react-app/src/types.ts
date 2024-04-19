export type DiaryItemType = {
  id : number,
  createdDate : number,
  emotionId : number,  
  content : string, 
}

export type FormType = {
  createdDate: Date,
  emotionId: number,
  content: string,
}
export interface ActionType {
  type : string; 
  date? : DiaryItemType; 
  id?: number,
}

export interface DispatchType {
  onCreate : (
    createdDate: number,
    emotionId: number,
    content: string
  ) => void; 
  onUpdate : (
    id: number,
    createdDate: number,
    emotionId: number,
    content: string 
  ) => void; 
  onDelete : (id: number) => void; 
}

export const nullDiaryItem : DiaryItemType = {
  id : -1, 
  createdDate : 0, 
  emotionId : 0, 
  content : ''
}

export const nullForm : FormType = {
  createdDate: new Date('0000-00-00'),
  emotionId: 0,
  content: '',
}