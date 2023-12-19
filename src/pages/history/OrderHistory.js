import Sidebar from "../../components/common/Sidebar";
import OrderHistorySection from "../../components/History/order/OrderHistorySection";
import MyPageTitleContainer from "../../components/mypage/MyPageTitleContainer";

export default function OrderHistory() {

    return (
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
                                            <MyPageTitleContainer title="내 구매 내역" subTitle="기프티콘 구매 내역 입니다"></MyPageTitleContainer>
                                            <OrderHistorySection></OrderHistorySection>
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