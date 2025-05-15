import { useState } from "react";
import userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";

export const Register = () => {
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
        userServices.register(formData).then(data => data.success && navigate('/login'))
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center p-4">
                <div className="col-12 col-md-6 startBox rounded p-4">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-center text-white mb-4">Register</h2>

                        <div className="row g-3">
                            <div className="col-12">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-12">
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-12 d-flex justify-content-center">
                                <input
                                    type="submit"
                                    value="Register"
                                    className="py-2 px-4 rounded cursor-pointer"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}