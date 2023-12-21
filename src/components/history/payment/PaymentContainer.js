import {useEffect, useRef} from "react";
import useIntersectionObserver from "../../ui/useIntersectionObserver";

export default function PaymentContainer({payment, increasePage, index, payments}) {
    let lastCardRef = useRef(null);

    let [observe, unobserve] = useIntersectionObserver(() => {
        increasePage();
    });

    useEffect(() => {
        if (lastCardRef.current) {
            unobserve(lastCardRef.current);
            observe(lastCardRef.current);
        }
    }, []);

    if (index === payments.length - 1) {
        return <div className="m-order__get" ref={lastCardRef}>
            <div className="manage-o__header u-s-m-b-30">
                <div className="dash-l-r">
                    <div>
                        <div className="manage-o__text-2 u-c-secondary">Order
                            #{payment.id}
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
                    <div className="description-title">{payment.price} Point</div>
                </div>
                <div className="description__info-wrap">
                    <div>
                        <span className="manage-o__badge badge--processing">{payment.payStatus}</span>
                    </div>
                    <div>
                    <span className="manage-o__text-2 u-c-silver">Quantity:

                        <span className="manage-o__text-2 u-c-secondary">1</span>
                    </span>
                    </div>
                    <div>

                    <span className="manage-o__text-2 u-c-silver">Total:
                        <span className="manage-o__text-2 u-c-secondary">{payment.price}</span>
                    </span>
                    </div>
                </div>
            </div>
        </div>;
    } else {
        return <div className="m-order__get">
            <div className="manage-o__header u-s-m-b-30">
                <div className="dash-l-r">
                    <div>
                        <div className="manage-o__text-2 u-c-secondary">Order
                            #{payment.id}
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
                    <div className="description-title">{payment.price} Point</div>
                </div>
                <div className="description__info-wrap">
                    <div>
                        <span className="manage-o__badge badge--processing">{payment.payStatus}</span>
                    </div>
                    <div>
                    <span className="manage-o__text-2 u-c-silver">Quantity:

                        <span className="manage-o__text-2 u-c-secondary">1</span>
                    </span>
                    </div>
                    <div>

                    <span className="manage-o__text-2 u-c-silver">Total:
                        <span className="manage-o__text-2 u-c-secondary">{payment.price}</span>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    }
};