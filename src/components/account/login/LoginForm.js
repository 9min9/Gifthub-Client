import LoginInputWrapper from "./LoginInputWrapper";
import SocialLoginWrapper from "./SocialLoginWrapper";
import LoginBtnWrapper from "./LoginInBtnWrapper";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

export default function LoginForm() {
    const urlParams = new URL(window.location.href).searchParams;
    const [inputs, setInputs] = useState({});
    const {params} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (urlParams.get("state") != null) {
            naverLoginHandler();
        } else if (urlParams.get("code") != null){
            kakaoLoginHandler();
        }

    }, []);

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })

        console.log(inputs)
    }

    const localLoginHandler = async () => {
        try {
            const response = await axios.post('http://localhost:8081/api/local/login', {
                // email: email,
                // password: password
            });

            alert("로그인 성공");
            console.log(response.data);

            const authorizationHeader = response.headers.authorization;
            const token = authorizationHeader.replace("Bearer ", "");
            localStorage.setItem("token", token);
            navigate("/");


        } catch (error) {
            console.log(error);
            console.log("로그인 실패");
        }
    };

    const kakaoLoginHandler = async () => {

    }

    const naverLoginHandler = () => {
        const code = urlParams.get("code");
        let param = '?code=' + code;

        axios
            .post("http://localhost:8081/api/naver/login" + param)
            .then(function (response) {
                let authorizationHeader = response.headers.authorization;
                let token = authorizationHeader.replace("Bearer ", "");
                localStorage.setItem("token", token);
                document.cookie = "Authorization=" + authorizationHeader;
                alert("네이버 로그인 성공")
                navigate("/");
            })
            .catch(function (error) {
                alert("네이버 로그인 실패");
                console.log(error);
            });
    }

    return (
        <form className="l-f-o__form">
            <LoginInputWrapper target="email" labelText="이메일" type="text" onChage={onChange}
                               placeholder="이메일을 입력해주세요"></LoginInputWrapper>
            <LoginInputWrapper target="password" labelText="비밀번호" type="password"
                               placeholder="비밀번호를 입력해주세요"></LoginInputWrapper>
            <LoginBtnWrapper localHandler={localLoginHandler}></LoginBtnWrapper>

            <div id="social-login-div" className="gl-s-api">
                <SocialLoginWrapper target="social" kakaoHandler={kakaoLoginHandler}
                                    naverHandler={naverLoginHandler}></SocialLoginWrapper>
            </div>
        </form>
    )

}