import UserInfo from '../UserInfo';
import { CommentProps } from './Comment.type';

const Comment = (props: CommentProps) => {
  const { author, text, date } = props;
  return (
    <div className="Comment">
      <UserInfo user={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{date}</div>
    </div>
  );
};

export default Comment;
