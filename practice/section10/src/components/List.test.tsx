import { render, screen } from '@testing-library/react';

import List from './List';

import { mockData } from '../App';

describe('List', () => {
  const onDelete = jest.fn();
  const onUpdate = jest.fn();
  it('render List', () => {
    render(
      <List todoList={mockData} onDelete={onDelete} onUpdate={onUpdate} />
    );

    mockData.forEach((data) => {
      screen.getByText(data.content);
    });
  });
});
