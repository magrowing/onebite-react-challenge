
import filterTodos from './filterTodoList'

import { mockData } from '../App';


describe('fitlerTodos', () => {

  it('검색어가 입력되지 않은 경우', () => {
    const filteredTodos = filterTodos(mockData, ''); 
    expect(filteredTodos).toEqual(mockData);
  });

  it('검색어가 목록에 있는 경우', () => {
    const filteredTodos = filterTodos(mockData, 'react'); 
    expect(filteredTodos.length).toBe(1);
  }); 

  it('검색어가 목록에 없는 경우', () => {
    const filteredTodos = filterTodos(mockData, 'css'); 
    expect(filteredTodos.length).toBe(0);
  }); 
})