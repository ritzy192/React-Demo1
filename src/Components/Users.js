import User from "./User";

const Users = (props) => {
  const users = props.users;
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return <User userDetails={user} key={user.id} />;
      })}
    </div>
  );
};

export default Users;
