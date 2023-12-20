import {Link} from "react-router-dom";

export default function AdminSidebar() {
    return (
        <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
            <div className="dash__pad-1">
                <span id="sidebar-nickname" className="dash__text u-s-m-b-16"></span>
                <ul className="dash__f-list">
                    <li><Link to={"/admin/index"}>관리자 메인 페이지</Link></li>
                    <li><Link to={"/admin/product/config"}>상품 관리</Link></li>
                    <li><Link to={"/admin/user/config"}>회원 관리</Link></li>
                    <li><Link to={"#"}>공지 사항 작성</Link></li>
                    <li><Link to={"#"}>문의 사항 관리</Link></li>
                    <li><Link to={"#"}>이벤트 관리</Link></li>
                </ul>
            </div>
        </div>
    );

}