import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import {useNavigate} from "react-router-dom";

export const useLogin = () =>{
    const [error, setError] =useState(null)
    const [isLoading, setIsLoading]=useState(null)
    const {dispatch}=useAuthContext()
    const navigate = useNavigate();
    
    const login = async(email, password) =>{
        setIsLoading(true)
        setError(null)
        const response=await fetch('http://localhost:5000/user/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})

        })

        // Returns a json
        const json=await response.json();

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // Save the user (firstName, lastName, email, token) to local storage
            localStorage.setItem('user', JSON.stringify(json))
            // Update the auth context, payload of the token is taken from json const
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
            navigate("/");
        }
    }
    return {login, isLoading, error}
}

