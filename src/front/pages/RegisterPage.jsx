import { Register } from "../components/register"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
    return (
        <div className="d-flex flex-column align-items-center pt-4 loginPage">
            <Register />
            <p className="smaill text-white mt-2">Already have an account? <Link to={'/login'}>Login</Link></p>
        </div>
    )
}