import { useState } from "react";
import userServices from "../services/userServices";

export const Register = () => {

    const [formData,setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
            
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        userServices.register(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email" type="email" value={formData.email} name="email" onChange={handleChange}/>
            <input placeholder="password" type="password" value={formData.password} name="password" onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}