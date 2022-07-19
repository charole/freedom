import { TodoPropsType } from './TodoUl.type';

const TodoView = ({ todos }: TodoPropsType<string>) => {
  const TodoLi =
    todos.length > 0 && todos.map((todo) => <li key={todo}>{todo}</li>);
  return <ul>{TodoLi}</ul>;
};

export default TodoView;
