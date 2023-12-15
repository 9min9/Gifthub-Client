import LoginInputWrapper from "../../components/account/login/LoginInputWrapper";

export default function Signup() {

    return (

        <div class="app-content">
            {/*//<!--====== Section 2 ======--> */}
            <div className="u-s-p-b-60">

                {/*// <!--====== Section Intro ======-->*/}
                <div class="section__intro u-s-m-y-60">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section__text-wrap">
                                    <h1 class="section__heading u-c-secondary">회원가입</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!--====== End - Section Intro ======--> */}
                <div className="container">
                    <div className="row row--center">
                        <div className="col-lg-6 col-md-8 u-s-m-b-30">
                            <div className="l-f-o">
                                <div className="l-f-o__pad-box">
                                    <form id="signup-form" className="l-f-o__form">
                                        <div className="gl-s-api"></div>
                                        <LoginInputWrapper target="email" labelText="이메일" type="text"
                                                           placeholder="이메일을 입력해주세요  (아이디로사용됩니다)"></LoginInputWrapper>
                                        <div className="gl-inline u-s-m-b-10">

                                            <LoginInputWrapper target="password" labelText="비밀번호" type="password"
                                                               placeholder="비밀번호를 입력해주세요"></LoginInputWrapper>
                                            <LoginInputWrapper target="confirm-password" labelText="비밀번호확인"
                                                               type="password"
                                                               placeholder="비밀번호를 다시한번 입력해주세요"></LoginInputWrapper>

                                        </div>

                                        {/*      에러메세지 props에 setstate로 해당되는 에러 메세지를 axios로 받아오는건가 ?*/}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}







