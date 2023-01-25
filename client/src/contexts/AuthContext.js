// Context is designed to share data that can be considered “global” for a tree of React components. 
// This the context for current authenticated user.

import {createContext, useReducer, useEffect, useState} from 'react'

//Create a context
export const AuthContext=createContext()

export const authReducer=(state, action) =>{
    switch (action.type){
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state 
    }
}

// Custom component to wrap the passed children  
export const AuthContextProvider=({children})=>{
    const [state, dispatch]=useReducer(authReducer, {
        user: null
    })
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        const validateToken = async(user) => {
            if (!user || !user.token) {
                return false;
            } else {
                const res = await fetch('http://localhost:5000/validate',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({token: user.token})
                });
                return res.ok;
            }
        }
        if (user) {
            validateToken(user).then((valid) => {
                if (valid) {
                    dispatch({type: "LOGIN", payload: user});
                } else {
                    localStorage.removeItem("user")
                    dispatch({type: "LOGOUT", payload: user});
                }
                setReady(true);
            })
        } else {
            setReady(true);
        }
    }, [ready])

    console.log("AuthContext state: ", state)
    return (
        ready ?
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
            : <></> // render nothing when loading user data
    )
}