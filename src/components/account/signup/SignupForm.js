import React, {useEffect, useState} from "react";
import SignupInputWrapper from "./SignupInputWrapper";
import OutlineButton from "../../ui/button/OutlineButton";
import SelectorButton from "../../ui/button/SelectorButton";
import {useNavigate} from "react-router-dom";
import MessageWrapper from "./MesseageWrapper";

import axios from "axios";

export default function SignupForm() {
    let navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const {email, password, confirmPassword, nickname} = inputs;
    const [validateMessages, setValidateMessages] = useState({email: '', nickname: '', tel: ''});
    const [style, setStyle] = useState('');
    const [field, setField] = useState('');

    const [validateMessage2, setValidateMessage2] = useState('');
    const [style2, setStyle2] = useState({email: '', nickname: '', tel: ''});

    const [field2, setField2] = useState('');
    const [tel, setTel] = useState({});

    const onBlur = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,

            [name]: value
        })

        errorCheck(e);
    }
    const errorCheck = (e) => {
        const {name, value} = e.target;

        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/local/signup/validate/${name}`,
                {[name]: value})
            .then(response => {
                let result = response.data
                setValidateMessages(prev => ({...prev, [name]: result.message}));
                setField(result.field);
                setStyle(prev => ({...prev, [name]: "green"}));


            })
            .catch(error => {
                let result = error.response.data
                setValidateMessages(prev => ({...prev, [name]: result.message}));
                setField(result.field)
                setStyle(prev => ({...prev, [name]: "red"}));
            });
    };

    const passwordConfirm = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })

    }
    useEffect(() => {
        if (!password && !confirmPassword) {
            setValidateMessage2("");
        } else if (password === confirmPassword) {
            setValidateMessage2("같습니다");
            setField2("confirmPassword");
            setStyle2("green")
        } else {
            setValidateMessage2("다릅니다");
            setField2("confirmPassword");
            setStyle2("red")

        }
    }, [inputs])


    const onChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const phoneTest = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setTel({
            ...tel,

            [name]: value
        })
    }
    const message = (e) => {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/message/check/sendSMS`,
                tel)

            .then(response => {
                alert("인증문자 발송 ")
                navigate("/signup");
            })
            .catch(error => {
                console.error(error);
            });
    };

    const signUp = (e) => {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/local/signup/submit`,
                inputs)
            .then(response => {
                alert("회원가입을 축하드립니다")
                navigate("/login");
            })
            .catch(error => {
                let result = error.response.data
                const iterator = result[Symbol.iterator]();
                let errorMessages = {};
                let errorFields = {};
                let errorStyle = {};

                for (const value of iterator) {
                    errorMessages = {...errorMessages, [value.field]: value.message};
                    errorFields = {...errorFields, [value.field]: "error"};
                    errorStyle = {...errorStyle, [value.field]: "red"};

                }

                setValidateMessages(errorMessages);
                setField(errorFields);
                setStyle(errorStyle);

                console.error(error);
            });
    };


    return (
        <form className="l-f-o__form">
            <div>

                <div className="gl-inline u-s-m-b-25">
                    <SignupInputWrapper target="email" labelText="이메일" type="text"
                                        placeholder="이메일을 입력해주세요" _onChange={onChange}
                                        _onBlur={onBlur}></SignupInputWrapper>

                </div>
                <div>
                    <MessageWrapper color={style.email} innerText={validateMessages.email}
                                    target={field}></MessageWrapper>
                </div>


                <div className="gl-inline u-s-m-b-25">

                    <SignupInputWrapper target="password" labelText="비밀번호" type="password"
                                        placeholder="비밀번호를 입력해주세요" _onBlur={passwordConfirm}></SignupInputWrapper>
                    <SignupInputWrapper target="confirmPassword" labelText="비밀번호확인" type="password"
                                        placeholder="비밀번호를 입력해주세요" _onChange={passwordConfirm}></SignupInputWrapper>

                </div>

                <div>

                    <MessageWrapper color={style2} innerText={validateMessage2} target={field2}></MessageWrapper>
                    <MessageWrapper color={style.password} innerText={validateMessages.password}
                                    target="password"></MessageWrapper>
                </div>


                <div className="gl-inline u-s-m-b-15">

                    <SignupInputWrapper target="nickname" labelText="닉네임" type="text"
                                        placeholder="닉네임을 입력해주세요" _onBlur={onBlur}
                                        _onChange={onChange}></SignupInputWrapper>
                    <SignupInputWrapper target="name" labelText="이름" type="text"
                                        placeholder="이름을 입력해주세요" _onChange={onChange}></SignupInputWrapper>

                </div>
                <div>
                    <MessageWrapper color={style.nickname} innerText={validateMessages.nickname}
                                    target="nickname"></MessageWrapper>
                </div>

                <div className="gl-inline u-s-m-b-25">

                    <SignupInputWrapper target="tel" labelText="전화번호" type="text"
                                        placeholder="01012345678" _onBlur={onBlur}></SignupInputWrapper>

                </div>
                <div>
                    <MessageWrapper color={style.tel} innerText={validateMessages.tel}
                                    target="tel"></MessageWrapper>
                </div>

                <div className="gl-inline u-s-m-b-25">

                    <SignupInputWrapper target="birthDate" labelText="생년월일" type="text"
                                        placeholder="생년월일 8자리를 입력해주세요" _onChange={onChange}></SignupInputWrapper>

                    <SelectorButton target="gender" labelText="성별" options={['m', 'f']} placeholder="성별"
                                    innerText={['남성', '여성']}
                                    _onChange={onChange}></SelectorButton>

                </div>

                <div className="u-s-m-b-25" style={{display: 'flex', justifyContent: 'center'}}>
                    <OutlineButton target="signUp" innerText="회원가입" _onClick={signUp}></OutlineButton>
                </div>

            </div>
        </form>
    )

}