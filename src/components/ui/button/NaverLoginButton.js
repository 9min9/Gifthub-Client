export default function NaverLoginButton(props) {
    const {target, innerText} = props;

    let id = target + "-btn";
    let redirectUrl = `${process.env.REACT_APP_SERVER_HOME_URL}/login`;
    let href = "https://nid.naver.com/oauth2.0/authorize?client_id=iw7Eqm8dtb9NpQ22vmxe&redirect_uri=" + redirectUrl + "&response_type=code"

    return (
        <button className="btn--icon" type="button">
            <a href={href}>
                <img src="/images/naver-login/naver_login_medium.png" className="btn u-img-fluid"/>
            </a>
        </button>
    )
}