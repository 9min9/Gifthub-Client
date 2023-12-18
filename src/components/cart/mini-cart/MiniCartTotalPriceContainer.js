export default function MiniCartTotalPriceContainer({totalPrice}) {
    return <div className="mini-total">
        <span className="subtotal-text">결제 금액</span>
        <span className="subtotal-value" id="subtotal-value">{totalPrice}</span>
    </div>
}