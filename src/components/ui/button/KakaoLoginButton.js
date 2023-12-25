export default function KakaoLoginButton(props) {
    const {target, innerText} = props;

    let id = target + "-btn";
    let redirectUrl = `${process.env.REACT_APP_SERVER_HOME_URL}/login`;
    let href = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=578c006810acb509f2ccc52277d13ec9&redirect_uri=" + redirectUrl + "&prompt=select_account"

    return (
        <button id={id} className="btn--icon" type="button">
            <a href={href}>
                <img src="/images/kakaologin/kakao_login_medium_wide.png" className="btn u-img-fluid"/>
            </a>
        </button>
    )
}