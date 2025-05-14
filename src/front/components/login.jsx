import { useState } from "react";
import userServices from "../services/userServices";

export const Login = () => {

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
        userServices.login(formData).then(data => {
            //almacenamos el token en el local storage
            localStorage.setItem('token', data.token)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email" type="email" value={formData.email} name="email" onChange={handleChange}/>
            <input placeholder="password" type="password" value={formData.password} name="password" onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}