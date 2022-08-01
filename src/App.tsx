import { Route, Routes, NavLink } from 'react-router-dom';
import { KeyboardEvent, useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import Checkbox from './components/Checkbox';
import useInput from './hooks/useInput';
import Body from './components/Body';
import ReactQueryTestPage from './pages/ReactQueryTestPage';
import UseFormTestPage from './pages/UseFormTestPage';

function App() {
  const [checked, changeHandler] = useInput<boolean>(false);
  const [username, inputChangeHandler] = useInput<string>('');
  const [form, setForm] = useState('');
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<ReactQueryTestPage username={form} />} />
        <Route path="/useForm" element={<UseFormTestPage />} />
      </Routes>
      <ul>
        <li>
          <NavLink to="/useForm">move useForm</NavLink>
        </li>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
      </ul>
      <input
        name="username"
        type="text"
        value={username}
        onChange={inputChangeHandler}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          const keyPressed = e.key;
          if (keyPressed === 'Enter') setForm(username);
        }}
      />
      <Checkbox name="chk1" value={checked} onChange={changeHandler} />
      <Body />
    </>
  );
}

export default App;
