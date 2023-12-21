export default function PaymentContainer({order}) {
    return <div className="m-order__get">
        <div className="manage-o__header u-s-m-b-30">
            <div className="dash-l-r">
                <div>
                    <div className="manage-o__text-2 u-c-secondary">Order
                        #{order.id}
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
                <div className="description-title">{order.price} Point</div>
            </div>
            <div className="description__info-wrap">
                <div>
                    <span className="manage-o__badge badge--processing">{order.payStatus}</span>
                </div>
                <div>
                    <span className="manage-o__text-2 u-c-silver">Quantity:

                        <span className="manage-o__text-2 u-c-secondary">1</span>
                    </span>
                </div>
                <div>

                    <span className="manage-o__text-2 u-c-silver">Total:
                        <span className="manage-o__text-2 u-c-secondary">{order.price}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
};