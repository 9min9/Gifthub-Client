import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] =useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');

        if (token) {
            setIsAuthenticated(true);
            setUserRole(role);
            setToken(token);
        }
    }, []);

    const loginHandler = (token, role) => {
        setIsAuthenticated(true);
        setUserRole(role);
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
    };

    const logoutHandler = () => {
        setIsAuthenticated(false);
        setToken('');
        setUserRole('');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, userRole, token, loginHandler, logoutHandler}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};
