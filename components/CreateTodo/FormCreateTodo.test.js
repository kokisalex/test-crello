import React from 'react';
import { shallow } from 'enzyme';
import { Context } from '../../pages/_app';
import FormCreateTodo from './FormCreateTodo';

const mockContextValue = {
  state: {
    todoTitle: 'hello',
    todoBody: 'world',
  },
  action: {
    saveTodo: jest.fn,
    changeState: jest.fn,
  }
};

it('FormCreateTodo: without crashing', () => {

  const TestFormCreateTodo = () => (
    <Context.Provider value={mockContextValue}>
      <FormCreateTodo />
    </Context.Provider>
  );

  const component = shallow(
    <TestFormCreateTodo />);

  component.render();
});