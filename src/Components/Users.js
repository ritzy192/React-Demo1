import User from "./User";
import Card from "./Card";
import "./Users.css";

const Users = (props) => {
  //const [users, setUsers] = useState(props.users);
  var users = props.users;
  const deleteUserHandler = (id) => {
    props.deleteHandler(id);
  };

  return (
    <Card className="users">
      <ul className="users-list">
        {users.map((user) => {
          return (
            <User
              userDetails={user}
              onDelete={deleteUserHandler}
              key={user.id}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Users;
