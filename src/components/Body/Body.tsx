import Comment from '../Comment';
import Button from '../Button';
import { BodyProps } from './Body.type';
//리액트를 사용할 경우 tsx 또는 jsx사용할 때 반드시 최상위 태그가 있어야함.
//리액트는 하나의 컴포넌트만 리턴이 가능함.
// React.Fragment는 기존 리액트의 경우 tr>td같이 일정 규칙으로 반복됨
// 다만 리액트는 div태그로 감싸서 return하기 때문에 table에 적합하지 않음.
// 그래서 table내 컴포넌트를 추가할 때 <Fragments/> 또는 <></>으로 작성

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

const text: string = '이것은 리액트 아닙니다.';
const date: string = '2022-07-16';

const Body = ({ firstName, lastName }: BodyProps) => {
  user.firstName = firstName;
  user.lastName = lastName;
  const element = <h2>{formatName(user)}!</h2>;

  return (
    <div id="wrap-body">
      <div>{element}</div>
      {/* 하위 컴포넌트에 prop를 전달해봄. */}
      <Comment author={author} text={text} date={date} />
      <Button onClick={() => {}} />
    </div>
  );
};

export default Body;
