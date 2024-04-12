export type ContactItemType = {
  id : number;
  name : string;
  contact :string | number; 
}


export type ActionType = {
  type: string;
  data?: ContactItemType;
  targetId?: number;
};


export type DispatchType = {
  OnDelete: (targetId: number) => void;
  onCreate: ({ name, contact }: { name: string; contact: string }) => void;
}