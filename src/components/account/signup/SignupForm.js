import React, {useState} from "react";
import SignupInputWrapper from "./SignupInputWrapper";
import OutlineButton from "../../ui/button/OutlineButton";
import SelectorButton from "../../ui/form/SelectorButton";
import axios from "axios";

export default function SignupForm() {

    const [inputs, setInputs] = useState({});

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })

        console.log(inputs)
    }


    // const handleSelectChange = (e) => {
    //     setSelectedGender(e.target.value);
    // };
    const phoneCheck = () => {
        console.log("인증번호입력하셈ㅋ");

    }

    const signUp = () => {
        console.log("회원가입");
    }

    return (
        <form className="l-f-o__form">
            <div>

                <div className="gl-inline u-s-m-b-25">

                    <SignupInputWrapper target="email" labelText="이메일" type="text"
                                        placeholder="이메일을 입력해주세요" _onChange={onChange}></SignupInputWrapper>
                </div>
                <div className="gl-inline u-s-m-b-25">

                    <SignupInputWrapper target="password" labelText="비밀번호" type="password"
                                        placeholder="비밀번호를 입력해주세요" _onChange={onChange}></SignupInputWrapper>
                    <SignupInputWrapper target="confirm-password" labelText="비밀번호확인" type="password"
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
                                        placeholder="'-'를포함해서 입력해주세요" _onChange={onChange}></SignupInputWrapper>
                    <div className="u-s-m-b-25"
                         style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
                        <OutlineButton target="phoneCheck" innerText="인증번호"
                                       phoneCheck={phoneCheck()}> </OutlineButton>
                    </div>

                </div>

                <div className="gl-inline u-s-m-b-25">

                    <SignupInputWrapper target="birthDate" labelText="생년월일" type="text"
                                        placeholder="생년월일 8자리를 입력해주세요" _onChange={onChange}></SignupInputWrapper>

                    {/*<SelectorButton target="gender" labelText={'성별'} title={'성별'} options={['남자', '여자']}*/}
                    {/*                handleSelectChange={handleSelectChange}/>*/}


                </div>

                <div className="u-s-m-b-25" style={{display: 'flex', justifyContent: 'center'}}>
                    <OutlineButton target="signUp" innerText="회원가입" signup={signUp}></OutlineButton>
                </div>
            </div>
        </form>
    )

}