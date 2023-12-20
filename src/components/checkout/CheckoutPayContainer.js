export default function CheckoutPayContainer({originalPrice, totalPrice}) {
    return <div class="col-lg-6">
        <h1 class="checkout-f__h1">결제 금액</h1>
        <div class="o-summary">
            <div class="o-summary__section u-s-m-b-30">
                <div class="o-summary__box">
                    <table class="o-summary__table">
                        <tbody>
                        <tr>
                            <td>원가</td>
                            <td id="original-price">{originalPrice}</td>
                        </tr>
                        <tr>
                            <td>할인금액</td>
                            <td id="discount-price">{originalPrice - totalPrice}</td>
                        </tr>
                        <tr>
                            <td>판매가</td>
                            <td id="total-price">{totalPrice}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h1 class="checkout-f__h1">결제 방식</h1>
            <div class="o-summary__section u-s-m-b-30">
                <div class="o-summary__box">
                    <form class="checkout-f__payment">
                        <div>
                            <button class="btn btn--e-brand-b-2" type="button" id="pay-with-point">포인트 결제</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
};