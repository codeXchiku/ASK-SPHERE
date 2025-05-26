import React from 'react'
import { createContext, useContext } from 'react'

//create->context
const AuthContext = createContext()

//provider
export const AuthProvider = ({children}) => {
    
    return (
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
    )
}

//consumer->use context


