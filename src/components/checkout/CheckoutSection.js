import CheckoutListContainer from "./CheckoutListContainer";
import CheckoutPayContainer from "./CheckoutPayContainer";

export default function CheckoutSection({originalPrice, totalPrice, gifticons, trashHandleClick}) {
    return <div className="section__content">
        <div className="container">
            <div className="checkout-f">
                <div className="row">
                    <CheckoutListContainer gifticons={gifticons} trashHandleClick={trashHandleClick}/>
                    <CheckoutPayContainer originalPrice={originalPrice} totalPrice={totalPrice}/>
                </div>
            </div>
        </div>
    </div>
};