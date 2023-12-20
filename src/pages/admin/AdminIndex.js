import Sidebar from "../../components/common/Sidebar";
import MyPageTitleContainer from "../../components/mypage/MyPageTitleContainer";


export default function AdminIndex() {

    return(

        <div className="app-content">
            <div className="u-s-p-y-60">
                <div className="section__content">
                    <div className="dash">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12">
                                    {/*todo : admin side bar*/}
                                    <Sidebar></Sidebar>
                                </div>

                                {/*todo : product manager page*/}
                                <div className="col-lg-9 col-md-12">
                                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                        <div className="dash__pad-2">
                                            <MyPageTitleContainer title={"상품 관리"}></MyPageTitleContainer>

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
            </div>
    );

}