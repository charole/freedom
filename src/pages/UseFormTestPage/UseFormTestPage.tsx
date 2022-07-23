import useForm from '@/hooks/useForm';
import { INITIAL_FORM } from './const';
import { InitialFormState } from './UseFormTestPage.type';

function UseFormTestPage() {
  const [form, changeHandler] = useForm<InitialFormState>(INITIAL_FORM);
  const { name, age, id } = form;

  console.info(form);

  return (
    <div>
      <input type="text" name="name" value={name} onChange={changeHandler} />
      <input
        type="text"
        name="age"
        data-type="number"
        value={age}
        onChange={changeHandler}
      />
      <input type="text" name="id" value={id} onChange={changeHandler} />
    </div>
  );
}

export default UseFormTestPage;
