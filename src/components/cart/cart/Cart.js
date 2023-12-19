import CartSection from "./CartSection";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Cart() {
    const currentPosition = [{position: "Home", url: "/"}, {position: "Cart", url: "/carts"}]

    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [originalPrice, setOriginalPrice] = useState(0)


    const fetchCart = async () => {
        await axios.get("http://localhost:8081/api/carts", {headers: {Authorization: localStorage.getItem("token")}})
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

        axios.post("http://localhost:8081/api/carts/delete", {},
            {headers: {Authorization: localStorage.getItem("token")}})
            .then(() => setCarts([]));
    }

    const trashHandleClick = (event) => {
        event.preventDefault();

        const id = event.target.id.replace("delete-", "");

        axios.post(`http://localhost:8081/api/carts/delete/${id}`, {}, {headers: {Authorization: localStorage.getItem("token")}})
            .then(() => fetchCart());
    }


    useEffect(() => {
        fetchCart();
    }, []);

    return <CartSection currentPosition={currentPosition} carts={carts} fetchCart={fetchCart}
                        clearCartHandleClick={clearCartHandleClick} totalPrice={totalPrice}
                        originalPrice={originalPrice} trashHandleClick={trashHandleClick}/>;
};