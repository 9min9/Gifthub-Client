import {Link} from "react-router-dom";
import {AuthContext} from "../account/AuthContextProvider";
import {useContext, useState} from "react";
import MiniCart from "../../pages/cart/MiniCart";
import Attendance from "../attendance/Attendance";

export default function Header({trashHandleClick, carts, totalPrice}) {
    const {isAuthenticated, userRole, logoutHandler} = useContext(AuthContext);
    let menu;

    const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);

    const handleOpenAttendanceModalClick = (event) => {
        setIsAttendanceOpen(true);
    }

    const handleCloseAttendanceModalClick = (event) => {
        setIsAttendanceOpen(false);
    }

    if (isAuthenticated) {
        if (userRole === "USER") {
            menu =
                <>
                    <li id="nav-attendance-li" className="u-s-m-r-6">
                        <a id="show-attendance-a" onClick={handleOpenAttendanceModalClick}>
                            <i className="fa-regular fa-square-check"></i>
                            <span>출석체크</span>
                        </a>
                    </li>
                    <li id="nav-point-li" className="u-s-m-r-6">
                        <Link to="/payments">
                            <i className="fa-solid fa-wallet"></i>
                            <span>포인트 충전</span>
                        </Link>
                    </li>
                    <li id="nav-mypage-li" className="u-s-m-r-6">
                        <Link to="/mypage">
                            <i className="fas fa-user-circle"></i>
                            <span>내정보</span>
                        </Link>
                    </li>

                    <li id="nav-logout-li" className="u-s-m-r-6">
                        <a className="btn" onClick={logoutHandler}><i className="fas fa-lock-open"></i>
                            <span>로그아웃</span>
                        </a>
                    </li>
                </>;
        }

        if (userRole === "ADMIN") {
            menu = <>
                <li id="nav-mypage-li" className="u-s-m-r-6">
                    <Link to="/admin/index">
                        <i className="fas fa-user-circle"></i>
                        <span>관리자 페이지</span>
                    </Link>
                </li>

                <li id="nav-logout-li" className="u-s-m-r-6">
                    <a className="btn" onClick={logoutHandler}><i className="fas fa-lock-open"></i>
                        <span>로그아웃</span>
                    </a>
                </li>
            </>
        }

    } else {
        menu = <>
            <li id="nav-signup-li" className="u-s-m-r-6">
                <Link to="/signup">
                    <i className="fas fa-user-plus"></i>
                    <span>회원가입</span>
                </Link>
            </li>

            <li id="nav-login-li" className="u-s-m-r-6">
                <a href="/login"><i className="fas fa-lock"></i>
                    <span>로그인</span></a></li>
        </>
    }

    return (
        <>
            <Attendance isOpen={isAttendanceOpen}
                        handleCloseModalClick={handleCloseAttendanceModalClick}
                        isAuthenticated={isAuthenticated}/>
            <nav className="primary-nav primary-nav-wrapper--border">
                <div className="container">
                    <div id="primary-nav" className="primary-nav">
                        <Link id="main-logo" className="main-logo" to="/">
                            <img src="/images/logo/logo-2.png" alt="로고"/>
                        </Link>
                        <div className="menu-init" id="navigation">
                            <button
                                className="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs responsible-hidden"
                                type="button"></button>
                            <button
                                className="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs responsible-hidden"
                                type="button"></button>
                            <div className="ah-lg-mode">
                                <span className="ah-close">✕ Close</span>
                                <ul id="nav-list" className="ah-list ah-list--design1 ah-list--link-color-secondary">
                                    {menu}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="secondary-nav-wrapper">
                <div className="container">
                    <div className="secondary-nav">
                        <div className="menu-init" id="navigation1"></div>
                        <div className="menu-init" id="navigation2">
                            <button
                                className="btn btn--icon toggle-button toggle-button--secondary fas fa-cog responsible-hidden"
                                type="button"></button>
                            <div className="ah-lg-mode">
                                <span className="ah-close">✕ Close</span>
                                <ul className="ah-list ah-list--design2 ah-list--link-color-secondary">
                                    <li><Link to="/gifticon/add">기프티콘 등록</Link></li>
                                    <li><Link to="/gifticon/my">내 기프티콘</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu-init" id="navigation3">
                            <button
                                className="btn btn--icon toggle-button toggle-button--secondary fas fa-shopping-bag toggle-button-shop responsible-hidden"
                                type="button"></button>
                            <span className="total-item-round"></span>
                            <div className="ah-lg-mode">
                                <span className="ah-close">✕ Close</span>
                                <ul className="ah-list ah-list--design1 ah-list--link-color-secondary" id="side-header">
                                    <li className="has-dropdown">
                                        {isAuthenticated && <MiniCart totalPrice={totalPrice} carts={carts}
                                                                      trashHandleClick={trashHandleClick}/>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );

}