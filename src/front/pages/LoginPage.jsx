import { Login } from "../components/login"
import { Link } from "react-router-dom"

export const LoginPage = () => {
    return (
        <div className="d-flex flex-column align-items-center pt-4 loginPage">
            <Login />
            <p className="smaill text-white mt-2">Need an account? <Link to={'/register'}>Register</Link></p>
        </div>
    )
}