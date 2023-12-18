import OrderSummaryWrapper from "./OrderSummaryWrapper";
import KakaoPayButton from "../ui/button/KakaoPayButton";
import PriceSelectorWrapper from "./PriceSelectorWrapper";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function OrderSummaryContainer() {
    let [totalPrice, setTotalPrice] = useState(5000);
    const [points, setPoints] = useState([
        {point: 5000, checked: true},
        {point: 10000, checked: false},
        {point: 20000, checked: false},
        {point: 30000, checked: false},
        {point: 40000, checked: false},
        {point: 50000, checked: false},
    ]);
    let navigate = useNavigate();

    useEffect(() => {
        const selectedPoint = points.filter((point) => point.checked)[0].point;

        setTotalPrice(selectedPoint);
    }, [points]);

    /**
     * 카카오 결제 창 이벤트
     */
    const kakaoPayHandleClick = async (event) => {
        await axios.post("http://localhost:8081/api/kakao/pay/ready", {
            itemName: "Point",
            totalAmount: totalPrice,
        }, {headers: {Authorization: localStorage.getItem("token")}})
            .then((res) => {
                let redirect_url = res.data.next_redirect_pc_url;

                let opened = window.open(redirect_url, "_blank", "width = 450, height = 700");
            })
    }

    /**
     * 라디오 박스 선택 이벤트
     */
    const radioBoxHandleClick = (event) => {
        const index = points.findIndex(point => point.point === parseInt(event.target.value));

        let pointsCopy = [...points];

        pointsCopy.forEach(point => point.checked = false);

        pointsCopy[index].checked = true;

        setPoints(pointsCopy);
    }

    const handleInputValue = (event) => {
        setTotalPrice(event.target.value);
    }

    return (
        <div class="o-summary">
            <div class="o-summary__section u-s-m-b-30">
                <div class="o-summary__item-wrap gl-scroll">
                    <PriceSelectorWrapper value={totalPrice} points={points} handleClick={radioBoxHandleClick}
                                          handleChange={handleInputValue}/>
                </div>
            </div>

            <div className="o-summary__section u-s-m-b-30">
                <div className="o-summary__box">
                    <OrderSummaryWrapper totalPrice={totalPrice}/>
                </div>
            </div>

            <div class="o-summary__section u-s-m-b-30">
                <div class="o-summary__box">
                    <h1 class="checkout-f__h1">결제 방식</h1>
                    <form class="checkout-f__payment">
                        <KakaoPayButton onClick={kakaoPayHandleClick}/>
                    </form>
                </div>
            </div>
        </div>
    );
}