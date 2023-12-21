import CheckoutListContainer from "./CheckoutListContainer";
import CheckoutPayContainer from "./CheckoutPayContainer";

export default function CheckoutSection({
                                            originalPrice,
                                            totalPrice,
                                            gifticons,
                                            trashHandleClick,
                                            handlePointClick,
                                            pointSelectRef
                                        }) {
    return <div className="section__content">
        <div className="container">
            <div className="checkout-f">
                <div className="row">
                    <CheckoutListContainer gifticons={gifticons} trashHandleClick={trashHandleClick}/>
                    <CheckoutPayContainer originalPrice={originalPrice} totalPrice={totalPrice}
                                          handlePointClick={handlePointClick} pointSelectRef={pointSelectRef}/>
                </div>
            </div>
        </div>
    </div>
};