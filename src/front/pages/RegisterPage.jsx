import { Register } from "../components/register"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
    return (
        <>
            <h3>Register</h3>
            <Register />
            <p className="smaill">Already have an account? <Link to={'/login'}>Login</Link></p>
        </>

    )
}