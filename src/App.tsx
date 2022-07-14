import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import Checkbox from './components/Checkbox';
import useInput from './hooks/useInput';

function App() {
  const [checked, changeHandler] = useInput<boolean>(false);
  console.info(checked);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Checkbox name="chk1" value={checked} onChange={changeHandler} />
    </>
  );
}

export default App;
