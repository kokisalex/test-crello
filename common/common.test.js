import {
  sortDate,
  searchFilter,
  compareId,
  formatDate,
  inputValue,
  removeTodo,
  updateListTodo,
} from './common';

it('sortDate', () => {
  const objA = { date: '2019-10-03T06:43:19.253Z' };
  const objB = { date: '2019-09-28T21:02:59.187Z' };


  expect(sortDate(objA, objB)).toEqual(-1);
});

it('searchFilter', () => {
  const objName = { title: 'hello my name is' };
  const name = 'hello';

  expect(searchFilter(name)(objName)).toEqual(true);
});

it('compareId', () => {
  const objId = { _id: '123' };
  const id = '123';

  expect(compareId(id)(objId)).toEqual(true);
});

it('formatDate', () => {
  const date = '2019-10-03T07:37:33.720Z';

  expect(formatDate(date)).toEqual('3.10.2019');
});

it('inputValue', () => {
  const val1 = 'hello';
  const val2 = '';

  expect(inputValue(val1, val2)).toEqual(false);
});

it('removeTodo', () => {
  const list = [
    { _id: 1 },
    { _id: 2 },
    { _id: 3 },
    { _id: 4 },
    { _id: 5 },
  ];
  const id = 3;

  const expected = [
    { _id: 1 },
    { _id: 2 },
    { _id: 4 },
    { _id: 5 },
  ];

  expect(removeTodo(list, id)).toEqual(expected);
});

it('updateListTodo', () => {
  const list = [
    { _id: 1, },
    { _id: 2 },
    { _id: 3, name: 'hello' },
    { _id: 4 },
    { _id: 5 },
  ];
  const id = 3;
  const item = { _id: 3, name: 'world' };

  const expected = [
    { _id: 1 },
    { _id: 2 },
    { _id: 3, name: 'world' },
    { _id: 4 },
    { _id: 5 },
  ];

  expect(updateListTodo(list, id, item)).toEqual(expected);
});

