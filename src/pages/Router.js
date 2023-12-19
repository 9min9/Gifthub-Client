import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Signup from "./account/Signup";
import Login from "./account/Login";
import Payment from "../components/payment/Payment";
import {useContext} from "react";
import {AuthContext} from "../components/account/AuthContextProvider";
import Cart from "../components/cart/cart/Cart";
import GifticonStorage from "./gifticon/GifticonStorage";
import MyGifticon from "./gifticon/MyGifticon";

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
                        <Route path="/gifticon/add" element={<GifticonStorage/>}/>
                        <Route path="/gifticon/my" element={<MyGifticon/>}/>
                        <Route path="/carts" element={<Cart/>}/>
                        <Route path="/payment/checkout" element={<Main/>}/>
                    </>)
                :
                (<Route path="/*" element={<Navigate to="/login"/>}/>)}
        </Routes>
    )
        ;
}