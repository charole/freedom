import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
// import Checkbox from './components/Checkbox';
// import useInput from './hooks/useInput';
import Body from './components/Body';

function App() {
  // const [checked, changeHandler] = useInput<boolean>(false);
  // console.info(checked);
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <Checkbox name="chk1" value={checked} onChange={changeHandler} /> */}
      <Body />
    </>
  );
}

export default App;
