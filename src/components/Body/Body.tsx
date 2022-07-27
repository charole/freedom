import CustomHookTest from '@/pages/CustomHookTest';
import ReactHookTest from '@/pages/ReactHookTest';
import Calculator from '../Calculator';

const Body = () => {
  return (
    <div>
      <Calculator />
      <ReactHookTest />
      <CustomHookTest />
    </div>
  );
};

export default Body;
