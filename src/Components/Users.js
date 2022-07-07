import User from "./User";
import Card from "./Card";
import "./Users.css";

const Users = (props) => {
  const users = props.users;
  console.log("from users.js");
  console.log(users);
  return (
    <Card className="users">
      <ul className="users-list">
        {users.map((user) => {
          return <User userDetails={user} key={user.id} />;
        })}
      </ul>
    </Card>
  );
};

export default Users;
