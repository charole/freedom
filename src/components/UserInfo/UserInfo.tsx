const UserInfo = (props: any) => {
  console.log(props);
  return (
    <div className="UserInfo">
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      ></img>
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;
