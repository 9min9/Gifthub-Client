import {useEffect, useState} from "react";
import axios from "axios";
import MiniCartContainer from "./MiniCartContainer";
import MiniCartTotalPriceContainer from "./MiniCartTotalPriceContainer";
import MiniCartButtonContainer from "./MiniCartButtonContainer";

export default function MiniCart() {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const fetchCart = async () => {
        await axios.get("http://localhost:8081/api/carts", {headers: {Authorization: localStorage.getItem("token")}})
            .then((result) => {
                setCarts(result.data);
                if (result.data.length !== 0) {
                    setTotalPrice(result.data.reduce((acc, current) => acc.gifticonDto.price + current.gifticonDto.price));
                }
            })
    }

    useEffect(() => {
        fetchCart().then();
    }, []);

    return (
        <>
            <a className="mini-cart-shop-link"><i className="fas fa-shopping-bag"></i><span
                className="total-item-round"></span></a>
            <span className="js-menu-toggle"></span>
            <div className="mini-cart">
                <div className="mini-product-container gl-scroll u-s-m-b-15"
                     id="mini-cart-list">
                    {carts.map((cart) => {
                        return (<MiniCartContainer cart={cart}/>);
                    })}
                </div>
                <div className="mini-product-stat">
                    <MiniCartTotalPriceContainer totalPrice={totalPrice}/>
                    <MiniCartButtonContainer/>
                </div>
            </div>
        </>
    )
}