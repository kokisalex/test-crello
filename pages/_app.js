import React from 'react';
import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header/Header';
import fetch from '../common/fetch';
import { removeTodo, newData, objToQuery } from '../common/common';

export const Context = React.createContext();

class CustomApp extends App {
  static async getInitialProps({ router }) {
    const {
      query
    } = router;
    const url = objToQuery('/api/todo', query)

    let todoList = [];
    try {
      todoList = await fetch.get(url)
    } catch (error) {
      console.error(error)
    }
    return {
      todoList,
    }
  }

  state = {
    todoList: this.props.todoList,
    todoTitle: '',
    todoBody: '',
    searchTodoName: '',
  }

  changeState(name, value) {
    this.setState({
      [name]: value,
    })
  }

  async saveTodo() {
    const { todoTitle, todoBody, todoList } = this.state;
    const body = {
      title: todoTitle,
      body: todoBody,
    }
    const todo = await fetch.post('/api/todo', body);
    const updatedTodoList = [...todoList, todo]
    this.setState({
      todoBody: '',
      todoTitle: '',
      todoList: updatedTodoList
    })
  }

  async removeTodo(id) {
    const { _id } = await fetch.delete(`/api/todo/${id}`)
    const todoList = removeTodo(this.state.todoList, _id)
    this.setState({
      todoList
    })
  }

  async changeTodo(id) {
    const { todoTitle: title, todoBody: body, todoList, } = this.state;
    const oldTodo = todoList.find(i => i._id === id)
    const patchBody = newData(oldTodo, { title, body })
    const todo = await fetch.patch(`/api/todo/${id}`, patchBody);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Context.Provider value={{
        state: this.state,
        action: {
          changeState: this.changeState.bind(this),
          saveTodo: this.saveTodo.bind(this),
          removeTodo: this.removeTodo.bind(this),
          changeTodo: this.changeTodo.bind(this)
        }
      }} >
        <div className="container">
          <Header>
            <Component {...pageProps} />
          </Header>
        </div>
      </Context.Provider>
    )
  }
}

export default CustomApp;