import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 생성
const AuthProvider = ({children}) => {
    const [token, setToken] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            setToken(token);
        }
    }, []);

    const handleLogin = (token) => {
        console.log("AuthProvider")
        console.log(token)
        // 로그인 로직 처리
        setIsAuthenticated(true);
        setToken(token);
        localStorage.setItem('token', token);
    };

    const handleLogout = () => {
        // 로그아웃 로직 처리
        setIsAuthenticated(false);
        setToken('');
        localStorage.removeItem('token');
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, token, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};
