import LoginInputWrapper from "../../components/account/login/LoginInputWrapper";

export default function Signup() {

    return(
      <h2>
          Signup
          <LoginInputWrapper target="email" labelText="이메일" type="text" placeholder="이메일을 입력해주세요"></LoginInputWrapper>
          <LoginInputWrapper target="password" labelText="비밀번호" type="password" placeholder="비밀번호를 입력해주세요"></LoginInputWrapper>
      </h2>
    );

}