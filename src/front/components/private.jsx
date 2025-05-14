import useGlobalReducer from "../hooks/useGlobalReducer"

export const Private = () => {
    const { store, dispatch } = useGlobalReducer()
    const handleLogout =()=>{
        dispatch({'type':'logout'})
    }
    return (
        <>
            <h3>{store.user?.email}</h3>
            <button onClick={handleLogout}>logout</button>

        </>
    )
}