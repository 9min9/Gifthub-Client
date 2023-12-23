import MiniCartContainer from "../../components/cart/mini-cart/MiniCartContainer";
import MiniCartTotalPriceContainer from "../../components/cart/mini-cart/MiniCartTotalPriceContainer";
import MiniCartButtonContainer from "../../components/cart/mini-cart/MiniCartButtonContainer";

export default function MiniCart({carts, totalPrice, trashHandleClick}) {

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
                            return (<MiniCartContainer cart={cart} key={cart.id} trashHandleClick={trashHandleClick}/>);
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