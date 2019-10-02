export const sortDate = ({ date: aDate }, { date: bDate }) => {
  return aDate > bDate && -1
}

export const searchFilter = (searchValue) => ({ title }) => {
  return title.includes(searchValue)
}

export const compareId = (id) => ({ _id }) => _id === id

export const formatDate = (val) => {
  const date = new Date(val);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`
}

export const inputValue = (val1, val2) => val1 && val2

export const removeTodo = (list, id) => {
  const index = list.findIndex(compareId(id));
  const partOne = list.slice(0, index);
  const partTwo = list.slice(index + 1)
  return partOne.concat(partTwo)
}

export const updateListTodo = (list, id, item) => {
  const index = list.findIndex(compareId(id));
  const partOne = list.slice(0, index);
  const partTwo = list.slice(index + 1)
  return partOne.concat([item]).concat(partTwo);
}