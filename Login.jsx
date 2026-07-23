import { useState } from "react";

const Login = ({ setToggle }) => {
    const [formdata, setFormdata] = useState({});
    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            onChange={handleChange}
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="cursor-pointer active:scale-[0.97] w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <span onClick={() => setToggle(false)} className="text-blue-600 hover:underline cursor-pointer">
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;