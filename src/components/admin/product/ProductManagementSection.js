import DashboardTitleContainer from "../../mypage/dashboard/DashboardTitleContainer";
import DashboardH1 from "../../ui/dashboard/DashboardH1";
import DashboardSpan from "../../ui/dashboard/DashboardSpan";

export default function ProductManagementSection() {
    return(
        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
            <DashboardTitleContainer>
                <DashboardH1 innerText={"상품 관리"} margin={"u-s-p-x-20 u-s-p-t-20"}></DashboardH1>
                <DashboardSpan innerText={"상품 등록 신청 목록"} margin={"u-s-p-x-20 u-s-p-t-10 u-s-p-b-20"}></DashboardSpan>
            </DashboardTitleContainer>

                <div className="dash__table-wrap gl-scroll">
                    <table className="dash__table">
                        <thead id="thead">
                        <tr>
                            <th>이름</th>
                            <th>브랜드</th>
                            <th>신청인</th>
                            <th>신청일</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody id="tbody">
                        </tbody>
                    </table>
                </div>





        </div>

    );
}