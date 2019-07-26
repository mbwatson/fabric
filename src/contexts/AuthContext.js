import React, { Fragment, useContext, useState } from 'react'
export const isBrowser = () => typeof window !== 'undefined'

const AuthContext = React.createContext({ })

export const AuthProvider = props => {
    const [user, setUser] = useState(null)
    
    const isLoggedIn = () => {
        const authedUser = isBrowser() ? localStorage.getItem('user') : ''
        setUser(authedUser)
        return !!authedUser
    }

    const loginHandler = () => {
        console.log('Logging in...')
        if (isBrowser()) localStorage.setItem('user', 'Jane Doe')
        console.log(isLoggedIn())
    }

    const logoutHandler = () => {
        console.log('Logging out...')
        if (isBrowser()) localStorage.removeItem('user')
        console.log(isLoggedIn())
    }

    const initialState = {
        user: null,
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
    }

    return (
        <AuthContext.Provider value={ initialState }>
            { props.children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
