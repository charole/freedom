import Comment from '../Comment';
import Button from '../Button';
import { BodyProps } from './Body.type';

const formatName = ({ firstName, lastName }: BodyProps) => {
  return (
    <>
      {firstName} {lastName}
    </>
  );
};

const user: BodyProps = { firstName: '', lastName: '' };

const author: { avatarUrl?: string; name: string } = {
  avatarUrl: '../../choi.jpg',
  name: '최민혁',
};

const text = '이것은 리액트 아닙니다.';
const date = '2022-07-16';

const Body = ({ firstName, lastName }: BodyProps) => {
  user.firstName = firstName;
  user.lastName = lastName;
  const element = <h2>{formatName(user)}!</h2>;

  return (
    <div id="wrap-body">
      <div>{element}</div>
      {/* 하위 컴포넌트에 prop를 전달해봄. */}
      <Comment author={author} text={text} date={date} />
      <Button
        onClick={() => {
          console.info('ttt');
        }}
      />
    </div>
  );
};

export default Body;
