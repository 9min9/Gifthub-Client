import PrimaryBtn from "../ui/button/PrimaryBtn";

export default function CheckoutPayContainer({originalPrice, totalPrice, handlePointClick, pointSelectRef}) {
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
                            <td id="total-price" ref={pointSelectRef}>{totalPrice}</td>
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
                            <PrimaryBtn id={"pay-with-point"} innerText={"포인트 결제"} _onClick={handlePointClick}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
};