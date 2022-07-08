import "./App.css";
import NewUser from "./Components/NewUser";
import Users from "./Components/Users";
import { useState } from "react";

function App() {
  const [users, setUserList] = useState([
    {
      id: 1,
      name: "Vatsala Tandon",
      firstName: "Vatsala",
      lastName: "Tandon",
      gender: "Female",
      dob: "1996/11/17",
      phoneNumber: 123456789,
      email: "vatsalatandon@gmail.com",
    },
    {
      id: 2,
      name: "Rythem Datta",
      firstName: "Rythem",
      lastName: "Datta",
      gender: "Male",
      dob: "1996/09/30",
      phoneNumber: 234567890,
      email: "ritzy192@gmail.com",
    },
  ]);

  // async function example() {
  //   try {
  //     const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // example();
  const getNewUser = (userData) => {
    console.log("from app.js");
    console.log(userData);
    setUserList([...users, userData]);
  };

  const handleDelete = (id) => {
    setUserList(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };
  return (
    <div className="App">
      <NewUser getUser={getNewUser} />
      <Users users={users} deleteHandler={handleDelete} />
    </div>
  );
}

export default App;
