import MyPageTitleContainer from "./MyPageTitleContainer";


export default function MyPageContentSection() {

    return(
        <div class="col-lg-9 col-md-12">
            <div class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                <div class="dash__pad-2">
                    <MyPageTitleContainer title="내 결제 내역" subTitle="결제 내역 입니다"></MyPageTitleContainer>


                    <div class="m-order__list" id="order-list">
                        <!--/* 주문 목록 */-->
                    </div>
                    <ul class="shop-p__pagination" id="pagination-place">
                    </ul>
                </div>
            </div>
        </div>
    )

}