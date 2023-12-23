import CurrentPositionContainer from "./CurrentPositionContainer";
import CartContainer from "./CartContainer";
import CartPriceContainer from "./CartPriceContainer";

export default function CartSection({
                                        currentPosition,
                                        carts,
                                        clearCartHandleClick,
                                        fetchCart,
                                        originalPrice,
                                        totalPrice,
                                        trashHandleClick,
                                        checkoutHandleClick
                                    }) {
    let content;

    if (carts && carts.length) {
        content = <CartContainer carts={carts} clearCartHandleClick={clearCartHandleClick} fetchCart={fetchCart}
                                 trashHandleClick={trashHandleClick}/>
    } else {
        content = <div className="section__intro u-s-m-b-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section__text-wrap">
                            <h1 className="section__heading u-c-secondary">SHOPPING CART</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    return <div className="app-content">
        <form action="/payment/checkout" method="get" name="checkout-form" className="f-cart">

            <div className="u-s-p-y-60">
                {<CurrentPositionContainer currentPosition={currentPosition}/>}
            </div>
            <div className="u-s-p-b-60">
                {content}
            </div>
            <div className="u-s-p-b-60">
                <CartPriceContainer original={originalPrice} totalPrice={totalPrice}
                                    checkoutHandleClick={checkoutHandleClick}/>
            </div>
        </form>
    </div>
};