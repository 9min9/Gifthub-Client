import OutlineButton from "../../ui/button/OutlineButton";
import GlLink from "../../ui/link/GlLink";

export default function LoginBtnWrapper(props) {


    return (
        <div id="account-btn" className="gl-inline">
            <div className="u-s-m-b-30">
                <GlLink href="/signup" innerText="회원가입"></GlLink>
            </div>

            <div className="u-s-m-b-30">
                <GlLink href="/password/reset" innerText="비밀번호 찾기"></GlLink>
            </div>

            <div className="u-s-m-b-30">
                <OutlineButton target="login" innerText="로그인" _onClick={props.onClickHandler}></OutlineButton>
            </div>
        </div>
    );

    function setCookie() {
        document.cookie = "Authorization=" + localStorage.getItem("token");
    }


}