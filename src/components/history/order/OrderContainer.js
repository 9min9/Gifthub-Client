export default function OrderContainer({order}) {
    return <div className="m-order__get">
        <div className="manage-o__header u-s-m-b-30">
            <div className="dash-l-r">
                <div>
                    <div className="manage-o__text-2 u-c-secondary">
                        Exchange # {order.id}
                    </div>
                </div>
            </div>
        </div>
        <div className="manage-o__description">
            <div className="description__container">
                <div className="description__img-wrap">
                    <img className="u-img-fluid"
                         src="images/product/electronic/product3.jpg" alt=""/>
                </div>
                <div className="description-title">{order.gifticon.price} Point <br/> {order.gifticon.productName}
                </div>
            </div>
            <div className="description__info-wrap">
                <div>
                    <span className="manage-o__badge badge--processing">{order.movementStatus}</span>
                </div>
                <div>
                    <span className="manage-o__text-2 u-c-silver">판매:
                        <span className="manage-o__text-2 u-c-secondary">{order.fromUser.nickname}</span>
                    </span>
                </div>
                <div>
                    <span className="manage-o__text-2 u-c-silver">구매:
                        <span className="manage-o__text-2 u-c-secondary">{order.toUser.nickname}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
};