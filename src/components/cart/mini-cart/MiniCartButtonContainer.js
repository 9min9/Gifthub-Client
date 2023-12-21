import {Link} from "react-router-dom";

export default function MiniCartButtonContainer({carts}) {
    let cartStr = ``;

    carts.forEach(cart => cartStr += `gifticonIds=${cart.gifticonDto.id}&`);

    return (
        <>
            <div className="mini-action">
                <Link to={`/payment/checkout?${cartStr}`}
                      className="mini-link btn--e-brand-b-2"
                      style={{width: "100%", cursor: "pointer"}}>
                    결제 하기
                </Link>
                <Link to="/carts"
                      className="mini-link btn--e-transparent-secondary-b-2">장바구니
                    보기</Link>
            </div>
        </>
    )
};