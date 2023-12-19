import SignupForm from "../../components/account/signup/SignupForm";

export default function Signup() {

    return (

        <div className="app-content">
            {/*//<!--====== Section 2 ======--> */}
            <div className="u-s-p-b-60">
                {/*// <!--====== Section Intro ======-->*/}
                <div className="section__intro u-s-m-y-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1 className="section__heading u-c-secondary">회원가입</h1>
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
                                    <SignupForm></SignupForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}







