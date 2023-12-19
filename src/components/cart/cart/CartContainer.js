import CartTableWrapper from "./CartTableWrapper";
import ClearCartWrapper from "./ClearCartWrapper";
import UpdateCartWrapper from "./UpdateCartWrapper";

export default function CartContainer({carts, clearCartHandleClick, fetchCart, trashHandleClick}) {


    return <div className="section__content">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                    <div className="table-responsive">
                        <CartTableWrapper carts={carts} trashHandleClick={trashHandleClick}/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="route-box">
                        <div className="route-box__g1">

                            <a className="route-box__link" href="shop-side-version-2.html"><i
                                className="fas fa-long-arrow-alt-left"></i>

                                <span>CONTINUE SHOPPING</span></a></div>
                        <div className="route-box__g2">

                            <ClearCartWrapper handleClick={clearCartHandleClick}/>
                            <UpdateCartWrapper handleClick={fetchCart}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};