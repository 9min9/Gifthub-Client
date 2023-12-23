import CartSection from "../../components/cart/cart/CartSection";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Cart({carts, setCarts, originalPrice, totalPrice, fetchCart, trashHandleClick}) {
    const currentPosition = [{position: "Home", url: "/"}, {position: "Cart", url: "/carts"}]

    const navigate = useNavigate();

    const clearCartHandleClick = (event) => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/carts/delete`, {},
            {headers: {Authorization: localStorage.getItem("token")}})
            .then(() => setCarts([]));
    }

    const checkoutHandleClick = (event) => {
        let sendData = ``;
        carts.forEach((cart) => sendData += `gifticonIds=${cart.gifticonDto.id}&`);

        navigate(`/payment/checkout?${sendData}`);
    }


    return <CartSection currentPosition={currentPosition} carts={carts} fetchCart={fetchCart}
                        clearCartHandleClick={clearCartHandleClick} totalPrice={totalPrice}
                        originalPrice={originalPrice} trashHandleClick={trashHandleClick}
                        checkoutHandleClick={checkoutHandleClick}/>;
};