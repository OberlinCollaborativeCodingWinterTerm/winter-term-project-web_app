// Context is designed to share data that can be considered “global” for a tree of React components. 
// This the context for current authenticated user.

import {createContext, useReducer} from 'react'

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
    console.log("AuthContext state: ", state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}