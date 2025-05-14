import { useState } from "react";
import userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        userServices.login(formData).then(data => {
            //almacenamos el token en el local storage
            if (data.success) {
                navigate('/private')
            }

        })
    }

    return (
        <div className="bg-cream min-h-screen flex align-items-center text-gray-800 font-sans p-4 w-50 rounded" style={{ backgroundColor: '#fdf6e3' }}>
            <form
                onSubmit={handleSubmit}
                className="bg-white d-flex flex-column rounded p-8 rounded-xl shadow-lg justify-items-center w-80 flex flex-col border border-gray-200"
            >
                <h2 className="text-2xl mb-6 text-center font-semibold pt-4">Login</h2>
                <div className="d-flex justify-content-center align-items-center py-4 gap-3">
                    <input
                        placeholder="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-100 text-gray-700 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-100 text-gray-700 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 mb-6"
                    />
                    <input
                        type="submit"
                        value="Login"
                        className="bg-amber-500 text-dark font-semibold py-2 px-4 rounded hover:bg-amber-400 cursor-pointer transition duration-200"
                    />
                </div>
            </form>
        </div>
    );
}