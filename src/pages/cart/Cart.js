import CartSection from "../../components/cart/cart/CartSection";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Cart() {
    const currentPosition = [{position: "Home", url: "/"}, {position: "Cart", url: "/carts"}]

    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [originalPrice, setOriginalPrice] = useState(0);

    const navigate = useNavigate();

    const fetchCart = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/carts`, {headers: {Authorization: localStorage.getItem("token")}})
            .then((result) => {
                setCarts(result.data);

                if (result.data.length !== 0) {
                    let totalSum = 0;
                    let originalSum = 0;

                    result.data.forEach(r => totalSum += r.gifticonDto.price);
                    result.data.forEach(r => originalSum += r.gifticonDto.productDto.price);

                    setTotalPrice(totalSum);
                    setOriginalPrice(originalSum);
                }
            })
    }

    const clearCartHandleClick = (event) => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/carts/delete`, {},
            {headers: {Authorization: localStorage.getItem("token")}})
            .then(() => setCarts([]));
    }

    const trashHandleClick = (event) => {
        event.preventDefault();

        const id = event.target.id.replace("delete-", "");

        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/carts/delete/${id}`, {}, {headers: {Authorization: localStorage.getItem("token")}})
            .then(() => fetchCart());
    }

    const checkoutHandleClick = (event) => {
        let sendData = ``;
        carts.forEach((cart) => sendData += `gifticonIds=${cart.gifticonDto.id}&`);

        navigate(`/payment/checkout?${sendData}`);
    }


    useEffect(() => {
        fetchCart();
    }, []);

    return <CartSection currentPosition={currentPosition} carts={carts} fetchCart={fetchCart}
                        clearCartHandleClick={clearCartHandleClick} totalPrice={totalPrice}
                        originalPrice={originalPrice} trashHandleClick={trashHandleClick}
                        checkoutHandleClick={checkoutHandleClick}/>;
};