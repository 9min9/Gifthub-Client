import Sidebar from "../../components/common/Sidebar";


export default function MyPage() {

    return(
        <div className="app-content">

            {/*// <!--====== Section 2 ======-->*/}
            <div className="u-s-p-y-60">

                {/*// <!--====== Section Content ======-->*/}
                <div className="section__content">
                    <div className="dash">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12">
                                    <Sidebar></Sidebar>
                                </div>
                                {/*<UserProfile>*/}
                                <div className="col-lg-9 col-md-12">
                                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                        <div className="dash__pad-2">
                                            <h1 className="dash__h1 u-s-m-b-14">내 정보</h1>

                                            <div className="row">
                                                <div className="col-lg-4 u-s-m-b-30">
                                                    <h2 className="dash__h2 u-s-m-b-8">이름</h2>
                                                    <span id="name" className="dash__text"></span>
                                                </div>
                                                <div className="col-lg-4 u-s-m-b-30">
                                                    <h2 className="dash__h2 u-s-m-b-8">이메일</h2>
                                                    <span id="email" className="dash__text"></span>
                                                    <div className="dash__link dash__link--secondary"></div>
                                                </div>

                                                <div className="col-lg-4 u-s-m-b-30">
                                                    <h2 className="dash__h2 u-s-m-b-8">닉네임</h2>
                                                    <span id="nickname" className="dash__text"></span>
                                                </div>

                                                <div className="col-lg-4 u-s-m-b-30">
                                                    <h2 className="dash__h2 u-s-m-b-8">전화 번호</h2>
                                                    <span id="tel" className="dash__text"></span>
                                                </div>
                                                <div className="col-lg-4 u-s-m-b-30">
                                                    <h2 className="dash__h2 u-s-m-b-8">생년 월일</h2>

                                                    <span id="birthDay" className="dash__text"></span>
                                                </div>
                                                <div className="col-lg-4 u-s-m-b-30">
                                                    <h2 className="dash__h2 u-s-m-b-8">성별</h2>
                                                    <span id="gender" className="dash__text"></span>
                                                </div>

                                                <div className="col-lg-4 u-s-m-b-30">
                                                    <h2 className="dash__h2 u-s-m-b-8">보유 포인트</h2>
                                                    <span id="point" className="dash__text"></span>
                                                </div>

                                                <div className="col-lg-4 u-s-m-b-30">
                                                    <h2 className="dash__h2 u-s-m-b-8">권한</h2>
                                                    <span id="user-type" className="dash__text"></span>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="dash__link dash__link--secondary u-s-m-b-30">

                                                    </div>
                                                    <div className="u-s-m-b-16">
                                                        <a className="dash__custom-link btn--e-transparent-brand-b-2" href="/edit/profile">수정 하기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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