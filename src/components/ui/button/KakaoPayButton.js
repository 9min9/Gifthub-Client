export default function KakaoPayButton({onClick}) {
    return <button className="btn kakao-pay" id="kakao-pay" style={{background: "#FFE500", color: "black"}}
                   type="button" onClick={onClick}>카카오페이로 결제</button>
}