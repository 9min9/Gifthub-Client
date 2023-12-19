import {Link} from "react-router-dom";


export default function Sidebar() {
    return (
        <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
            <div className="dash__pad-1">

                <span id="sidebar-nickname" className="dash__text u-s-m-b-16"></span>
                <ul className="dash__f-list">
                    <li><Link to="/mypage">내정보</Link></li>
                    <li><Link to={"/payment/history"}>결제 내역</Link></li>
                    <li><Link to={"/order/history"}>구매 내역</Link></li>
                    <li><Link to={"#"}>사용 내역</Link></li>
                    <li><Link to={"#"}>친구 목록</Link></li>
                    <li><Link to={"#"}>선물 내역</Link></li>
                </ul>
            </div>
        </div>

    );
}