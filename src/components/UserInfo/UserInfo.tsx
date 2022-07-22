import { UserInfoProps } from './UserInfo.type';

const UserInfo = (props: UserInfoProps) => {
  const { user } = props;
  return (
    <div className="UserInfo">
      <img className="Avatar" src={user.avatarUrl} alt={user.name} />
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
};

export default UserInfo;
