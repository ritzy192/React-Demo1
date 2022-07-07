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
    },
    {
      id: 2,
      name: "Rythem Datta",
      firstName: "Rythem",
      lastName: "Datta",
      gender: "Male",
      dob: "1996/09/30",
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
  return (
    <div className="App">
      <NewUser getUser={getNewUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
