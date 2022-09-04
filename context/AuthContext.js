import {createContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null)

    const register = async ()=> {};
    const login = async ()=> {};
    const logout = async ()=> {};
    const loggedIn = async ()=> {};

    return(
        <AuthContext.Provider value={{user, error, register, login, logout, loggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;

