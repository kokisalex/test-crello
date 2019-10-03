import React from 'react';
import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header/Header';
import fetch from '../common/fetch';
import { removeTodo } from '../common/common';

export const Context = React.createContext();

class CustomApp extends App {
  static async getInitialProps() {
    let todoList = [];
    let err;
    try {
      todoList = await fetch.get('/api/todo');
    } catch (error) { 
      err = error;
    }
    return {
      todoList,
      err,
    };
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
    });
  }

  async saveTodo() {
    const { todoTitle, todoBody, todoList } = this.state;
    const body = {
      title: todoTitle,
      body: todoBody,
    };
    const todo = await fetch.post('/api/todo', body);
    const updatedTodoList = [...todoList, todo];
    this.setState({
      todoBody: '',
      todoTitle: '',
      todoList: updatedTodoList
    });
  }

  async removeTodo(id) {
    const { _id } = await fetch.delete(`/api/todo/${id}`);
    const todoList = removeTodo(this.state.todoList, _id);
    this.setState({
      todoList
    });
  }

  async changeTodo(id) {
    await fetch.patch(`/api/todo/${id}`, { archive: true });
    const todoListUpdated = await fetch.get('/api/todo');
    this.setState({
      todoList: todoListUpdated
    });
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
          changeTodo: this.changeTodo.bind(this),
        }
      }} >
        <div className="container">
          <Header>
            <Component {...pageProps} />
          </Header>
        </div>
      </Context.Provider>
    );
  }
}

export default CustomApp;