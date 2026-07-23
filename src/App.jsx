import { useState } from "react"
import Login from "../Login"
import Register from "../Register";

const App = () => {

  const [toggle, setToggle] = useState(true);
  return (
    // <Form1 />
    // <Form2 />
    toggle ? <Login setToggle={setToggle}/> : <Register setToggle={setToggle}/>
  )
}

export default App