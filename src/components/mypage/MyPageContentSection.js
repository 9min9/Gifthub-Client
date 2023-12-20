import MyPageTitleContainer from "./MyPageTitleContainer";
import DashboardContentWrapper from "./dashboard/DashboardContentWrapper";
import DashboardButtonWrapper from "./dashboard/DashboardButtonWrapper";


export default function MyPageContentSection({userInfo}) {

    return (
        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
            <div className="dash__pad-2">
                <MyPageTitleContainer title={"내 정보"}></MyPageTitleContainer>

                {/*Container를 만들 필요 없을 듯 함*/}
                <div className="row">
                    <DashboardContentWrapper title={"이름"} content={userInfo.name}></DashboardContentWrapper>
                    <DashboardContentWrapper title={"이메일"} content={userInfo.email}></DashboardContentWrapper>
                    <DashboardContentWrapper title={"닉네임"} content={userInfo.nickname}></DashboardContentWrapper>
                    <DashboardContentWrapper title={"전화 번호"} content={userInfo.tel}></DashboardContentWrapper>
                    <DashboardContentWrapper title={"생년 월일"} content={userInfo.year + userInfo.birthDate}></DashboardContentWrapper>
                    <DashboardContentWrapper title={"성별"} content={userInfo.gender}></DashboardContentWrapper>
                    <DashboardContentWrapper title={"보유 포인트"} content={userInfo.point}></DashboardContentWrapper>
                    <DashboardContentWrapper title={"권한"} content={userInfo.userType}></DashboardContentWrapper>
                </div>

                <div className="row">
                    <DashboardButtonWrapper innerText={"수정 하기"}></DashboardButtonWrapper>
                </div>

            </div>
        </div>


    )

}