import UserInfo from '../UserInfo';
import { CommentProps } from './Comment.type';

const Comment = (props: CommentProps) => {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
};

export default Comment;
