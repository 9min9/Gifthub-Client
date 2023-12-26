import LoginInputWrapper from "./LoginInputWrapper";
import SocialLoginWrapper from "./SocialLoginWrapper";
import LoginBtnWrapper from "./LoginInBtnWrapper";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthContextProvider";
import MessageWrapper from "../signup/MesseageWrapper";


export default function LoginForm() {
    const {loginHandler} = useContext(AuthContext);
    const urlParams = new URL(window.location.href).searchParams;
    const [inputs, setInputs] = useState({});
    const {email, password} = inputs;
    const [validateMessage, setValidateMessage] = useState('');
    const [field, setField] = useState('');
    const [style, setStyle] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        if (urlParams.get("state") != null) {
            naverLoginHandler();
        } else if (urlParams.get("code") != null) {
            kakaoLoginHandler();
        }
    }, []);

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    useEffect(() => {
    }, [inputs]);

    const localLoginHandler = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/local/login`, {email, password})
            .then(function (response) {
                let token = convertToken(response);
                const userRole = response.data.userRole;
                loginHandler(token, userRole);

                alert("로그인 성공");
                navigate("/");
            })
            .catch(function (error) {
                console.log(error);
                let result = error.response.data
                setValidateMessage(result.message);
                setField(result.field);
                setStyle("red");
                console.log(result);
            });
    };

    const kakaoLoginHandler = async () => {
        const code = urlParams.get('code');                 //Kakao 로그인이 성공했을 때 얻는 인가 코드를 URL에서 추출
        let param = '?code=' + code;                       //Kakao 로그인이 성공했을 때 얻는 인가 코드를 URL에서 추출

        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/kakao/login` + param)
            .then(function (response) {
                let token = convertToken(response);
                let userRole = response.data.userRole;
                loginHandler(token, userRole);
                alert("카카오 로그인 성공");
                navigate("/");
            })
            .catch(function (error) {
                console.log(error)
                alert("카카오 로그인 실패");
            });
    }

    const naverLoginHandler = () => {
        const code = urlParams.get("code");
        let param = '?code=' + code;

        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/naver/login` + param)
            .then(function (response) {
                let token = convertToken(response);
                let userRole = response.data.userRole;
                loginHandler(token, userRole);
                alert("네이버 로그인 성공")
                navigate("/");
            })
            .catch(function (error) {
                alert("네이버 로그인 실패");
                console.log(error);
            });
    }

    const convertToken = (response) => {
        const authorizationHeader = response.headers.authorization;
        const token = authorizationHeader.replace("Bearer ", "");

        return token;
    }

    return (
        <form className="l-f-o__form">
            <LoginInputWrapper target="email" labelText="이메일" type="text"
                               placeholder="이메일을 입력해주세요" _onChange={onChange}></LoginInputWrapper>
            <LoginInputWrapper target="password" labelText="비밀번호" type="password"
                               placeholder="비밀번호를 입력해주세요" _onChange={onChange}></LoginInputWrapper>
            <LoginBtnWrapper onClickHandler={localLoginHandler}></LoginBtnWrapper>
            <div>
                <MessageWrapper color={style} innerText={validateMessage} target={field}></MessageWrapper>
            </div>

            <div id="social-login-div" className="gl-s-api">
                <SocialLoginWrapper target="social" kakaoHandler={kakaoLoginHandler}
                                    naverHandler={naverLoginHandler}></SocialLoginWrapper>
            </div>
        </form>
    )

}