import "./App.css";
import NewUser from "./Components/NewUser";
import Users from "./Components/Users";

function App() {
  const users = [
    { id: 1, name: "Vatsala", age: 25, gender: "Female" },
    { id: 2, name: "Rythem", age: 24, gender: "Male" },
  ];
  return (
    <div className="App">
      <NewUser />
      <Users users={users} />
    </div>
  );
}

export default App;
