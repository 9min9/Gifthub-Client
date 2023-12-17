import OrderSummaryTable from "./OrderSummaryTable";
import KakaoPayButton from "../ui/button/KakaoPayButton";
import RadioBoxWrapper from "./PriceSelector";
import PriceSelector from "./PriceSelector";
import {useState} from "react";

export default function OrderSummary({points, setPoints, totalPrice}) {
    let [value, setValue] = useState(5000);

    return (
        <div class="o-summary">
            <div class="o-summary__section u-s-m-b-30">
                <div class="o-summary__item-wrap gl-scroll">
                    <PriceSelector points={points} setPoints={setPoints} value={value} setValue={setValue}/>
                </div>
            </div>

            <div className="o-summary__section u-s-m-b-30">
                <div className="o-summary__box">
                    <OrderSummaryTable totalPrice={value}/>
                </div>
            </div>

            <div class="o-summary__section u-s-m-b-30">
                <div class="o-summary__box">
                    <h1 class="checkout-f__h1">결제 방식</h1>
                    <form class="checkout-f__payment">
                        <KakaoPayButton/>
                    </form>
                </div>
            </div>
        </div>
    );
}