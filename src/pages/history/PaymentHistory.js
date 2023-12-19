import Sidebar from "../../components/common/Sidebar";
import PaymentHistorySection from "../../components/History/payment/PaymentHistorySection";
import MyPageTitleContainer from "../../components/mypage/MyPageTitleContainer";


export default function PaymentHistory() {

    return(
        <div className="app-content">
            <div className="u-s-p-y-60">
                <div className="section__content">
                    <div className="dash">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12">
                                    <Sidebar></Sidebar>
                                </div>

                                <div className="col-lg-9 col-md-12">
                                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                        <div className="dash__pad-2">
                                            <MyPageTitleContainer title="내 결제 내역" subTitle="결제 내역 입니다"></MyPageTitleContainer>

                                            <PaymentHistorySection></PaymentHistorySection>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}