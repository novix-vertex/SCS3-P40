import { useState } from "react";

const Form2 = () => {
    //Using single formdata state to contain all the input data and onChange

    const [formdata, setFormdata] = useState({});

    return (
        <div className="flex flex-col gap-5 w-60 p-5 border-4 m-6">
            <h1>Form 1:</h1>
            <p>{formdata.name}</p>
            <p>{formdata.email}</p>
            <p>{formdata.password}</p>
            <input onChange={(e) => { setFormdata({ ...formdata, name: e.target.value }) }} className="border-gray-400 border-2 p-1" placeholder="Name" type="text" />
            <input onChange={(e) => { setFormdata({ ...formdata, email: e.target.value }) }} className="border-gray-400 border-2 p-1" placeholder="Email" type="text" />
            <input onChange={(e) => { setFormdata({ ...formdata, password: e.target.value }) }} className="border-gray-400 border-2 p-1" placeholder="Password" type="text" />
            <button className="bg-gray-900 border-2 p-1 text-white active:scale-[0.97] cursor-pointer">Submit</button>
        </div>
    )
}

export default Form2