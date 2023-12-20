import {Navigate, Route, Routes} from "react-router-dom";
import Product from "./product/Product";
import Signup from "./account/Signup";
import Login from "./account/Login";
import Payment from "./payment/Payment";
import {useContext} from "react";
import {AuthContext} from "../components/account/AuthContextProvider";
import Cart from "./cart/Cart";
import GifticonStorage from "./gifticon/GifticonStorage";
import MyGifticon from "./gifticon/MyGifticon";
import Checkout from "./checkout/Checkout";
import MyPage from "./account/MyPage";
import PaymentHistory from "./history/PaymentHistory";
import OrderHistory from "./history/OrderHistory";

export default function Router() {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <Routes>
            <Route exact path="/" element={<Product/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

            {isAuthenticated ? (
                    <>
                        <Route path="/payments" element={<Payment/>}/>
                        <Route path="/mypage" element={<MyPage/>}/>
                        <Route path="/gifticon/add" element={<GifticonStorage/>}/>
                        <Route path="/gifticon/my" element={<MyGifticon/>}/>
                        <Route path="/carts" element={<Cart/>}/>
                        <Route path="/payment/checkout" element={<Checkout/>}/>
                        <Route path="/payment/history" element={<PaymentHistory/>}/>
                        <Route path="/order/history" element={<OrderHistory/>}/>
                        <Route path="/payment/checkout" element={<Checkout/>}/>
                    </>)
                :
                (<Route path="/*" element={<Navigate to="/login"/>}/>)}
        </Routes>
    )
        ;
}