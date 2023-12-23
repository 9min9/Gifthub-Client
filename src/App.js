import './App.css';
import Header from "./components/common/Header";
import Router from "./pages/Router";
import Footer from "./components/common/Footer";
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [carts, setCarts] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [originalPrice, setOriginalPrice] = useState(0);

    const fetchCart = async () => {
        if (localStorage.getItem("token")) {
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
                });
        }

    }

    const trashHandleClick = (event) => {
        event.preventDefault();

        const id = event.target.id.replace("mini-delete-", "").replace("delete-", "");

        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/carts/delete/${id}`, {}, {headers: {Authorization: localStorage.getItem("token")}})
            .then(() => fetchCart());
    }

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <>
            <Header trashHandleClick={trashHandleClick} carts={carts} totalPrice={totalPrice}/>
            <Router fetchCart={fetchCart} carts={carts} setCarts={setCarts} originalPrice={originalPrice}
                    totalPrice={totalPrice} trashHandleClick={trashHandleClick}/>
            <Footer/>
        </>
    )
}

export default App;
