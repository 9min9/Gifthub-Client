import LoginInputWrapper from "./LoginInputWrapper";
import OutlineButton from "../../ui/button/OutlineButton";
import SocialLoginWrapper from "./SocialLoginWrapper";

export default function LoginForm() {

    const onClick = () => {
        console.log("do login");

    }

    return (
        <form className="l-f-o__form">
            <LoginInputWrapper target="email" labelText="이메일" type="text" placeholder="이메일을 입력해주세요"></LoginInputWrapper>
            <LoginInputWrapper target="password" labelText="비밀번호" type="password" placeholder="비밀번호를 입력해주세요"></LoginInputWrapper>

            <div id="account-btn" className="gl-inline">
                <div className="u-s-m-b-30">
                    {/*<GlLink href="/signup" innerText ="회원가입"></GlLink>*/}
                </div>

                <div className="u-s-m-b-30">
                    <a className="gl-link" href="/lost-password">비밀번호 찾기</a>
                </div>

                <div className="u-s-m-b-30">
                    <OutlineButton target="login" innerText ="로그인" onClick={onClick()}></OutlineButton>
                </div>
            </div>

            {/*// <!--카카오 로그인 -->*/}
            <div id="social-login-div" className="gl-s-api">
                <SocialLoginWrapper target="social"></SocialLoginWrapper>
            </div>
        </form>
    )

}