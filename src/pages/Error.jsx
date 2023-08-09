import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Error(){
    
    const navigate = useNavigate()

    useEffect(()=>{
        navigate("/")
    },[navigate])

    return(
        <main></main>
    )
}

export default Error