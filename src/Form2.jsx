import { useState } from "react";

const Form2 = () => {
    //Using single formdata state to contain all the input data and onChange

    const [formdata, setFormdata] = useState({});

    //use single handleChange function and using name property to provide unique value to input as well as being used as ["property name"]  

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col gap-5 w-60 p-5 border-4 m-6">
            <h1>Form 1:</h1>
            <p>{formdata.name}</p>
            <p>{formdata.email}</p>
            <p>{formdata.password}</p>
            <input onChange={handleChange} className="border-gray-400 border-2 p-1" name="name" placeholder="Name" type="text" />
            <input onChange={handleChange} className="border-gray-400 border-2 p-1" name="email" placeholder="Email" type="text" />
            <input onChange={handleChange} className="border-gray-400 border-2 p-1" name="password" placeholder="Password" type="text" />
            <button className="bg-gray-900 border-2 p-1 text-white active:scale-[0.97] cursor-pointer">Submit</button>
        </div>
    )
}

export default Form2