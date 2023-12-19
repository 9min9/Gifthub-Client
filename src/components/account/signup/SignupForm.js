import React, {useEffect, useState} from "react";
import SignupInputWrapper from "./SignupInputWrapper";
import OutlineButton from "../../ui/button/OutlineButton";
import SelectorButton from "../../ui/button/SelectorButton";
import axios from "axios";

export default function SignupForm() {

    const [inputs, setInputs] = useState({});

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const signUp = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8081/api/local/signup/submit', inputs)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
    }, [inputs]);

    return (
        <form className="l-f-o__form">
            <div>

                <div className="gl-inline u-s-m-b-25">

                    <SignupInputWrapper target="email" labelText="이메일" type="password"
                                        placeholder="이메일을 입력해주세요" _onChange={onChange}></SignupInputWrapper>
                </div>
                <div className="gl-inline u-s-m-b-25">

                    <SignupInputWrapper target="password" labelText="비밀번호" type="password"
                                        placeholder="비밀번호를 입력해주세요" _onChange={onChange}></SignupInputWrapper>
                    <SignupInputWrapper target="confirmPassword" labelText="비밀번호확인" type="text"
                                        placeholder="비밀번호를 입력해주세요" _onChange={onChange}></SignupInputWrapper>

                </div>


                <div className="gl-inline u-s-m-b-15">

                    <SignupInputWrapper target="nickname" labelText="닉네임" type="text"
                                        placeholder="닉네임을 입력해주세요" _onChange={onChange}></SignupInputWrapper>
                    <SignupInputWrapper target="name" labelText="이름" type="text"
                                        placeholder="이름을 입력해주세요" _onChange={onChange}></SignupInputWrapper>

                </div>

                <div className="gl-inline u-s-m-b-25">

                    <SignupInputWrapper target="tel" labelText="전화번호" type="text"
                                        placeholder="01012345678" _onChange={onChange}></SignupInputWrapper>

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