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
import ProductManagement from "./admin/ProductManagement";
import AdminIndex from "./admin/AdminIndex";
import PageRedirect from "./PageRedirect";

export default function Router() {
    const {isAuthenticated, userRole} = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" element={<Product/>} />
            <Route path="/signup" element={isAuthenticated ? <Navigate to="/"/> : <Signup/>}/>
            <Route path="/login" element={isAuthenticated ? <Navigate to="/"/> : <Login/>}/>
            <Route path="/redirect" element={<PageRedirect></PageRedirect> }></Route>

            {isAuthenticated && (
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
                </>
            )}

            {/*FIXME 이것을 없애면 새로고침 시 리다이렉트가 되지만 로그인 상태가 아닐 시 로그인 창으로 이동하지 않음*/}
            {!isAuthenticated && (
                <Route path="/*" element={<Navigate to="/login"/>}/>
            )}

            {isAuthenticated && userRole === "ADMIN" && (
                <>
                    <Route path="/admin/index" element={<AdminIndex/>}/>
                    <Route path="/admin/product/config" element={<ProductManagement/>}/>
                </>
            )}
        </Routes>
    );
}