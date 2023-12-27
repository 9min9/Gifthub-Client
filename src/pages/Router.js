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
import NotFound from "../components/common/NotFound";
import NotForbidden from "../components/common/NotForbidden";
import PageRedirect from "./PageRedirect";

export default function Router({carts, setCarts, originalPrice, totalPrice, fetchCart, trashHandleClick}) {
    const {isAuthenticated, userRole} = useContext(AuthContext);

    return (
        <Routes>
            <Route exact path="/" element={<Product fetchCart={fetchCart}/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/redirect" element={<PageRedirect/>}></Route>
            <Route path="/notForbidden" element={<NotForbidden/>}></Route>


            {!isAuthenticated ? (
                <>
                    <Route path="/payments" element={<Navigate to="/login"/>}/>,
                    <Route path="/mypage" element={<Navigate to="/login"/>}/>,
                    <Route path="/payment" element={<Navigate to="/login"/>}/>,
                    <Route path="/gifticon/my" element={<Navigate to="/login"/>}/>,
                    <Route path="/gifticon/add" element={<Navigate to="/login"/>}/>,
                    <Route path="/carts" element={<Navigate to="/login"/>}/>,
                    <Route path="/order" element={<Navigate to="/login"/>}/>


                </>
            ) : (

                (<></>)

            )}

            {isAuthenticated ? (
                <>
                    <Route path="/payments" element={<Payment/>}/>
                    <Route path="/mypage" element={<MyPage/>}/>
                    <Route path="/mypage/refresh" element={<Navigate replace to="/mypage"/>}/>
                    <Route path="/login" element={<Navigate to="/"/>}/>
                    <Route path="/gifticon/add" element={<GifticonStorage/>}/>
                    <Route path="/gifticon/add/refresh" element={<Navigate replace to="/gifticon/add"/>}/>
                    <Route path="/gifticon/my" element={<MyGifticon/>}/>
                    <Route path="/gifticon/my/refresh" element={<Navigate replace to="/gifticon/my"/>}/>
                    <Route path="/carts" element={<Cart carts={carts} setCarts={setCarts} totalPrice={totalPrice}
                                                        originalPrice={originalPrice} fetchCart={fetchCart}
                                                        trashHandleClick={trashHandleClick}/>}/>
                    <Route path="/payment/checkout" element={<Checkout/>}/>
                    <Route path="/payment/history" element={<PaymentHistory/>}/>
                    <Route path="/order/history" element={<OrderHistory/>}/>

                </>
            ) : (

                (<></>)

            )}


            {userRole === "ADMIN" ? (
                <>
                    <Route path="/admin/index" element={<AdminIndex/>}/>
                    <Route path="/admin/product/config" element={<ProductManagement/>}/>
                    <Route path="/admin/product/config/refresh" element={<Navigate replace to="/admin/product/config"/>}/>

                </>
            ) : (
                <Route path="/admin/*" element={<Navigate to="/notForbidden"/>}/>

            )}

            <Route path="/*" element={<NotFound/>}/>
            <Route path="/login" element={<Login/>}></Route>

        </Routes>

    );

}
