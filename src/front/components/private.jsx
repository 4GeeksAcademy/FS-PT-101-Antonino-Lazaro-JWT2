import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import userServices from "../services/userServices"
import { useNavigate } from "react-router-dom"

export const Private = () => {
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return navigate('/login')
        }

        userServices.getUserInfo().then(data => {
            if (!data.success) {
                return navigate('/login')
            }
            dispatch({ type: 'getUserInfo', payload: data.user })
        })
    }, [])

    const handleLogout = () => {
        dispatch({ type: 'logout' })
        navigate('/')
    }

    return (
        <div className="d-flex gap-3 flex-column align-items-center">
            <h3 className="text-white">Bienvenido</h3>
            {store.user &&
                <h3 className="text-white fw-bold">{store.user.email}</h3>
            }
            <button className="neon-btn-logout" onClick={handleLogout}>logout</button>
        </div>
    )
}