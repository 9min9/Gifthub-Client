import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 생성
const AuthProvider = ({ children }) => {
    const [jwt, setJwt] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            setJwt(token);
        }
    }, []);

    const handleLogin = (token) => {
        console.log("AuthProvider")
        console.log(token)
        // 로그인 로직 처리
        setIsAuthenticated(true);
        localStorage.setItem('token', token);
    };

    const handleLogout = () => {
        // 로그아웃 로직 처리
        setIsAuthenticated(false);
        setJwt('');
        localStorage.removeItem('token');
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, jwt, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
