import { useState } from "react";

const Register = (props) => {
    const { setToggle } = props;
    const [users, setUsers] = useState([]);

    const [formdata, setFormdata] = useState({});

    console.log(users);
    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, formdata]);
        setFormdata({
            name: "",
            email: "",
            password: ""
        });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Register
                </h2>

                <form onSubmit={handleSubmit}
                    className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            required
                            onChange={handleChange}
                            value={formdata.name}
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            required
                            onChange={handleChange}
                            value={formdata.email}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            required
                            onChange={handleChange}
                            value={formdata.password}
                            name="password"
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="cursor-pointer active:scale-[0.97] w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <span onClick={() => setToggle(true)} className="text-green-600 hover:underline cursor-pointer">
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;