import {useEffect, useState} from "react";
import axios from "axios";
import MiniCartContainer from "../../components/cart/mini-cart/MiniCartContainer";
import MiniCartTotalPriceContainer from "../../components/cart/mini-cart/MiniCartTotalPriceContainer";
import MiniCartButtonContainer from "../../components/cart/mini-cart/MiniCartButtonContainer";

export default function MiniCart() {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const fetchCart = async () => {
        await axios.get("http://localhost:8081/api/carts", {headers: {Authorization: localStorage.getItem("token")}})
            .then((result) => {
                if (result.data.length !== 0) {
                    setCarts(result.data);

                    let sum = 0;

                    result.data.forEach(r => sum += r.gifticonDto.price);

                    setTotalPrice(sum);
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
                    {carts !== 0 ?
                        carts.map((cart) => {
                            return (<MiniCartContainer cart={cart} key={cart.id}/>);
                        }) : <></>
                    }
                </div>
                <div className="mini-product-stat">
                    <MiniCartTotalPriceContainer totalPrice={totalPrice}/>
                    <MiniCartButtonContainer carts={carts}/>
                </div>
            </div>
        </>
    )
}