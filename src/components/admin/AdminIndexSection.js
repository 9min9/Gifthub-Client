import DashboardTitleContainer from "../mypage/dashboard/DashboardTitleContainer";
import DashboardH1 from "../ui/dashboard/DashboardH1";
import DashboardSpan from "../ui/dashboard/DashboardSpan";

export default function AdminIndexSection() {
    return(


        <div class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
            <div class="dash__pad-2">
                <DashboardTitleContainer>
                    <DashboardH1 innerText={"관리자 메인 페이지"} margin={"u-s-m-b-14"}></DashboardH1>
                    <DashboardSpan innerText={"기프티콘 검수, 회원 관리, 공지사항 및 문의사항 관리"} margin={"u-s-m-b-30"}></DashboardSpan>
                </DashboardTitleContainer>

                <div class="row">
                    {/*AdminIndexContainer*/}
                    <div class="col-lg-4 u-s-m-b-30">
                        <div class="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                            <div class="dash__pad-3">
                                <h2 class="dash__h2 u-s-m-b-8">PERSONAL PROFILE</h2>
                                <div class="dash__link dash__link--secondary u-s-m-b-8">

                                    <a href="dash-edit-profile.html">Edit</a></div>

                                <span class="dash__text">John Doe</span>

                                <span class="dash__text">johndoe@domain.com</span>
                                <div class="dash__link dash__link--secondary u-s-m-t-8">

                                    <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe
                                        Newsletter</a></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 u-s-m-b-30">
                        <div class="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                            <div class="dash__pad-3">
                                <h2 class="dash__h2 u-s-m-b-8">ADDRESS BOOK</h2>

                                <span class="dash__text-2 u-s-m-b-8">Default Shipping Address</span>
                                <div class="dash__link dash__link--secondary u-s-m-b-8">

                                    <a href="dash-address-book.html">Edit</a></div>

                                <span class="dash__text">4247 Ashford Drive Virginia - VA-20006 - USA</span>

                                <span class="dash__text">(+0) 900901904</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 u-s-m-b-30">
                        <div class="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                            <div class="dash__pad-3">
                                <h2 class="dash__h2 u-s-m-b-8">BILLING ADDRESS</h2>

                                <span class="dash__text-2 u-s-m-b-8">Default Billing Address</span>

                                <span class="dash__text">4247 Ashford Drive Virginia - VA-20006 - USA</span>

                                <span class="dash__text">(+0) 900901904</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
}