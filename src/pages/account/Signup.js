import SignupForm from "../../components/account/signup/SignupForm";

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
                                    <form className="l-f-o__pad-box">
                                        <SignupForm></SignupForm>
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







