import LoginForm from "../../components/account/login/LoginForm";
import TextLogo from "../../components/ui/logo/TextLogo";

export default function Login() {
    return (
        <div className="app-content">
            <div className="u-s-p-y-60">
                {/*// <!--====== Section Intro ======-->*/}
                <div className="section__intro u-s-m-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1>
                                        <TextLogo href="/"></TextLogo>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!--====== End - Section Intro ======-->*/}

                {/*// <!--====== Section Content ======-->*/}
                <div className="section__content">
                    <div className="container">
                        <div className="row row--center">
                            <div className="col-lg-6 col-md-8 u-s-m-b-30">
                                <div className="l-f-o">
                                    <div className="l-f-o__pad-box">
                                        <h1 className="gl-h1">로그인</h1>

                                        <LoginForm></LoginForm>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!--====== End - Section Content ======-->*/}
            </div>
            {/*// <!--====== End - Section 2 ======-->*/}
        </div>
    );
}