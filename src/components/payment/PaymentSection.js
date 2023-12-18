import OrderSummaryContainer from "./OrderSummaryContainer";

export default function PaymentSection() {
    return (
        <div class="section__content">
            <div class="container">
                <div class="checkout-f">
                    <div class="row">
                        <div class="col-lg">
                            <h1 class="checkout-f__h1">결제 금액 선택</h1>
                            <OrderSummaryContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}