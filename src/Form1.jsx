import { useState } from "react";

const Form1 = () => {
    //Using separate state for each input and onChange
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col gap-5 w-60 p-5 border-4 m-6">
            <h1>Form 1:</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <input onChange={(e) => { setName(e.target.value) }} className="border-gray-400 border-2 p-1" placeholder="Name" type="text" />
            <input onChange={(e) => { setEmail(e.target.value) }} className="border-gray-400 border-2 p-1" placeholder="Email" type="text" />
            <input onChange={(e) => { setPassword(e.target.value) }} className="border-gray-400 border-2 p-1" placeholder="Password" type="text" />
            <button className="bg-gray-900 border-2 p-1 text-white active:scale-[0.97] cursor-pointer">Submit</button>
        </div>
    )
}

export default Form1