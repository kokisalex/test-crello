export const formatDate = (val) => {
  const date = new Date(val);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`
}

export const inputValue = (val1, val2) => val1 && val2

export const removeTodo = (list, id) => {
  const index = list.findIndex(i => i._id === id);
  const partOne = list.slice(0, index);
  const partTwo = list.slice(index + 1)
  return partOne.concat(partTwo)
}

export const updateListTodo = (list, id, item) => {
  const index = list.findIndex(i => i._id === id);
  const partOne = list.slice(0, index);
  const partTwo = list.slice(index + 1)
  return partOne.concat([item]).concat(partTwo);
}

export const newData = (body, newBody) => {
  const keys = Object.keys(body)
  return keys.reduce((acc, value) => {
    if (inputValue(body[value], newBody[value])) {
      return Object.assign(acc, { [value]: newBody[value] })
    }
    return Object.assign(acc, { archive: true })
  }, {})
}

export const objToQuery = (url, obj) => {
  if (!obj) {
    return url
  }
  const keys = Object.keys(obj)

  const query = keys.reduce((acc, value) => {
    return `${acc}${value}=${obj[value]}`
  }, '?')
  return url + query
}

export const validateObj = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}