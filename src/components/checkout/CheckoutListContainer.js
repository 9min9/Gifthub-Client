import CheckoutListWrapper from "./CheckoutListWrapper";

export default function CheckoutListContainer({gifticons, trashHandleClick}) {
    return <div className="col-lg-6">
        <h1 className="checkout-f__h1">구매 목록</h1>
        <div className="o-summary__section u-s-m-b-30">
            <div className="o-summary__item-wrap gl-scroll" style={{maxHeight: "400px"}}
                 id="main-gifticon">
                {gifticons.map((gifticon) => (
                    <CheckoutListWrapper gifticon={gifticon} trashHandleClick={trashHandleClick}/>
                ))}
            </div>
        </div>
    </div>;
};