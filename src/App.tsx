import { Route, Routes } from 'react-router-dom';
import { KeyboardEvent, useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import Checkbox from './components/Checkbox';
import useInput from './hooks/useInput';
import Body from './components/Body';
import ReactQueryTestPage from './pages/ReactQueryTestPage';

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
      </Routes>
      <input
        name="username"
        type="text"
        value={username}
        onChange={inputChangeHandler}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          const keyPressed = e.key;
          console.info(username);
          if (keyPressed === 'Enter') setForm(username);
        }}
      />
      <Checkbox name="chk1" value={checked} onChange={changeHandler} />
      <Body />
    </>
  );
}

export default App;
