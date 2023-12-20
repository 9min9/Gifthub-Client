export default function CheckoutListWrapper({gifticon, trashHandleClick}) {
    return <div className={`o-card`} id={`gifticon-${gifticon.id}`}>
        <div className="o-card__flex">
            <div className="o-card__img-wrap">
                <img className="u-img-fluid"
                     src="images/product/men/product8.jpg" alt=""/>
            </div>
            <div className="o-card__info-wrap">
                                <span className="o-card__name">
                                    <a href="product-detail.html">{gifticon.productName}</a>
                                    <input type="hidden" name="gifticonIds"
                                           className="real-gifticonIds"
                                           value={gifticon.id}/>
                                </span>
                <span className="o-card__quantity">Quantity x 1</span>
                <span className="o-card__price">{gifticon.price}</span>
            </div>
        </div>
        <a className="o-card__del far fa-trash-alt trash"
           id={`trash-${gifticon.id}`} onClick={trashHandleClick}>
        </a>
    </div>;
};