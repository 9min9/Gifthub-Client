import {Route, Routes, Navigate} from "react-router-dom";
import Main from "./Main";
import Signup from "./account/Signup";
import Login from "./account/Login";
import Payment from "../components/payment/Payment";
import {useContext} from "react";
import {AuthContext} from "../components/account/AuthContextProvider";

export default function Router() {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <Routes>
            <Route exact path="/" element={<Main/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

            {isAuthenticated ? (
                    <>
                        <Route path="/payments" element={<Payment/>}/>
                        <Route path="/mypage" element={<Main/>}/>
                        <Route path="/gifticon/add" element={<Main/>}/>
                        <Route path="/user/my-gifticon" element={<Main/>}/>
                        <Route path="/carts" element={<Main/>}/>
                        <Route path="/payment/checkout" element={<Main/>}/>
                    </>)
                :
                (<Route path="/*" element={<Navigate to="/login"/>}/>)}
        </Routes>
    )
        ;
}