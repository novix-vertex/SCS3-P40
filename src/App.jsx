import { useState } from "react"
import Login from "../Login"
import Register from "../Register";

const App = () => {

  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    // <Form1 />
    // <Form2 />
    toggle ? <Login setToggle={setToggle} /> : <Register setUsers={setUsers} setToggle={setToggle} />
  )
}

export default App