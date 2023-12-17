import OrderSummary from "./OrderSummary";
import {useState} from "react";

export default function Payment() {
    const [points, setPoints] = useState([
        {point: 5000, checked: true},
        {point: 10000, checked: false},
        {point: 20000, checked: false},
        {point: 30000, checked: false},
        {point: 40000, checked: false},
        {point: 50000, checked: false},
    ]);

    return (
        <div class="section__content">
            <div class="container">
                <div class="checkout-f">
                    <div class="row">
                        <div class="col-lg">
                            <h1 class="checkout-f__h1">결제 금액 선택</h1>
                            <OrderSummary points={points} setPoints={setPoints} totalPrice={1000}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}