import { useState } from 'react';
import FormComponent from './components/FormComponent/FormComponent';
import TodoDataComponent from './components/TodoDataComponent/TodoDataComponent';
import AllTodosComponent from './components/AllTodosComponent/AllTodosComponent';
import './App.css';

interface Todo {
  id: number;
  title: string;
  isUrgent: boolean;
  isCompleted: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string, isUrgent: boolean) => {
    // if (title.trim() === '') return;
    const newTodo = { id: Date.now(), title, isUrgent, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const createdTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.isCompleted).length;
  const urgentTasks = todos.filter(todo => todo.isUrgent).length;

  return (
    <div className="app">
      <h1>Todo App</h1>
      <FormComponent onAddTodo={addTodo} />
      <TodoDataComponent
        createdTasks={createdTasks}
        completedTasks={completedTasks}
        urgentTasks={urgentTasks}
      />
      <AllTodosComponent
        todos={todos}
        onToggleComplete={toggleComplete}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default App;

