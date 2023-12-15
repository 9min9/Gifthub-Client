import KakaoLoginButton from "../../ui/button/KakaoLoginButton";
import NaverLoginButton from "../../ui/button/NaverLoginButton";

export default function SocialLoginWrapper(props) {

    return (
        <div id="social-login-div" className="gl-s-api">
            <div className="u-s-m-b-5">
                <KakaoLoginButton target={props.target} innerText={props.innerText} />
            </div>

            <div className="u-s-m-b-5">
                <NaverLoginButton target={props.target} innerText={props.innerText} />
            </div>
        </div>


    )
}