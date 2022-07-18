import { FormEvent, useState } from 'react';
import Button from '../Button';
import TodoView from '../Todo';

const todo = ['Typescript', 'Javascript', 'CSS'];

const Body = () => {
  const [todoList, setTotoList] = useState(todo);

  const handlerFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo: string = (e.target as HTMLFormElement).todo.value;
    setTotoList([...todoList, todo]);
    (e.target as HTMLFormElement).todo.value = ''; // submit후 input 초기화
  };

  return (
    <>
      <h1>To-Do List</h1>
      <form onSubmit={handlerFormSubmit}>
        <input name="todo" id="todo" />
        <Button label="추가" type="submit" />
      </form>
      {/* Todo List View */}
      <TodoView todos={todoList} />
    </>
  );
};

export default Body;
