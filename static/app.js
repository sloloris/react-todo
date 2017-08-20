import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './js/components/HelloWorld';
import TodoList from './js/components/TodoList'


const root = document.getElementById('root')
const render = () => ReactDOM.render(
  <TodoList />,
  root
)

render()



