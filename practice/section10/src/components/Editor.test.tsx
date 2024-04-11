import { render, screen } from '@testing-library/react';

import Editor from './Editor';

describe('Editor', () => {
  const onCreate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render text field, add button', () => {
    render(<Editor onCreate={onCreate} />);

    screen.getByPlaceholderText(/새로운 Todo/);
    screen.getByText('추가');
  });

  // 추가되는 로직은 E2E test 처리가 나을거 같다.
  // it('add buttons is clicked', () => {
  //   render(<Editor onCreate={onCreate} />);

  //   fireEvent.click(screen.getByText('추가'));

  //   expect(onCreate).toHaveBeenCalled();
  // });
});
