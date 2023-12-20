import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 생성
const AuthProvider = ({children}) => {
    const [token, setToken] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] =useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            setToken(token);
        }
    }, []);

    const handleLogin = (token, role) => {
        setIsAuthenticated(true);
        setUserRole(role);
        setToken(token);
        localStorage.setItem('token', token);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setToken('');
        setUserRole('');
        localStorage.removeItem('token');
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, userRole, token, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};
