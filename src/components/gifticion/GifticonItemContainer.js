import GifticonItemImage from "./GifticonItemImage";
import GifticonItemInfo from "./GifticonItemInfo";
import PrimaryButton from "../ui/button/PrimaryButton";
import WhiteButton from "../ui/button/WhiteButton";
import NewsletterModal from "../modal/newsletter/NewsletterModal";
import useNewsletterModal from "../../hooks/useNewsletterModal";
import GifticonHiddenInfo from "./GifticonHiddenInfo";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";

export default function GifticonItemContainer({item}) {
    const {isOpen, openModal, closeModal} = useNewsletterModal();
    let navigate = useNavigate();
    let screen;

    const renderErrorInfo = (content, error) => {
        return (
            <GifticonItemInfo content={content} error={error ?
                <span className="u-s-m-x-10" style={{color: 'red'}}>{error}</span> : null}/>
        )
    }

    const deleteStorage = () => {
        axios
            .post(
                `${process.env.REACT_APP_SERVER_URL}/api/storage/delete/` + item.gifticonStorageId,
                null,
                {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (response) {
                alert("삭제가 완료되었습니다");
                console.log(response.data.message);
                navigate("/gifticon/add/refresh");

            });
    }

    const deleteGifticon = () => {
        axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/gifticon/delete/` + item.id,
            null,
            {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (res) {
                alert("기프티콘 삭제 완료");
                navigate("/gifticon/my/refresh");

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleUseClick = () => {
        axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/gifticon/use/` + item.id,
            null,
            {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (res) {
                navigate("/gifticon/my/refresh");
            })
            .catch(function (error) {
                console.log(error);
                alert(`사용 실패\n\n${error.response.data.message}`);

            })

    }

    const handleReUseClick = () => {
        axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/gifticon/reUse/` + item.id,
            null,
            {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (res) {
                alert("메세지 발송 성공")
                navigate("/gifticon/my/refresh");

            })
            .catch(function (error) {
                console.log(error);
                alert(`재사용 실패\n\n${error.response.data.message}`);

            })
    }

    const handleSellClick = () => {
        axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/gifticon/forSale/` + item.id,
            null,
            {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (res) {
                alert("판매중으로 처리 완료");
                navigate("/gifticon/my/refresh");

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleChangePriceClick = () => {

    }

    const handleCancelSaleClick = () => {
        axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/gifticon/notForSale/` + item.id,
            null,
            {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (res) {
                alert("판매취소 완료");
                navigate("/gifticon/my/refresh");

            })
            .catch(function (error) {
                console.log(error);
            })
    }


    const renderWaitRegistrationState = () => {
        return (
            <div className="w-r u-s-m-b-30">
                <div className="w-r__container">
                    <div id="gifticon-info-wrap" className="w-r__wrap-1">
                        <GifticonItemImage url={item.imageUrl}/>

                        <div id="gifticon-info" className="w-r__info">
                            {renderErrorInfo(item.brand, "브랜드 이름이 존재하지 않습니다")}
                            {renderErrorInfo(item.productName, "상품명이 존재하지 않습니다")}
                            {renderErrorInfo(item.barcode, "바코드 번호가 존재하지 않습니다")}
                            {renderErrorInfo(item.due, "유효기간이 존재하지 않습니다")}
                            <GifticonHiddenInfo content={item.status}></GifticonHiddenInfo>
                            <GifticonHiddenInfo content={item.flagInDb}></GifticonHiddenInfo>
                        </div>
                    </div>

                    <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                        <WhiteButton innerText="삭제" _onClick={deleteStorage}/>
                        <PrimaryButton innerText="등록 하기" _onClick={() => openModal()}/>
                    </div>

                    <NewsletterModal item={item} isOpen={isOpen} closeModal={closeModal}/>
                </div>
            </div>
        );
    }

    const renderNeedApprovalState = () => {
        return (
            <div className="w-r u-s-m-b-30">
                <div className="w-r__container">
                    <div id="gifticon-info-wrap" className="w-r__wrap-1">
                        <GifticonItemImage url={item.imageUrl}/>

                        <div id="gifticon-info" className="w-r__info">
                            {renderErrorInfo(item.brand, "브랜드 이름이 존재하지 않습니다")}
                            {renderErrorInfo(item.productName, "상품명이 존재하지 않습니다")}
                            {renderErrorInfo(item.barcode, "바코드 번호가 존재하지 않습니다")}
                            {renderErrorInfo(item.due, "유효기간이 존재하지 않습니다")}
                            <GifticonHiddenInfo content={item.status}></GifticonHiddenInfo>
                            <GifticonHiddenInfo content={item.flagInDb}></GifticonHiddenInfo>
                        </div>
                    </div>

                    <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                        <WhiteButton innerText="삭제" _onClick={deleteStorage}/>
                        <PrimaryButton innerText="등록 하기" _onClick={() => openModal()}/>
                    </div>

                    <NewsletterModal item={item} isOpen={isOpen} closeModal={closeModal}/>
                </div>
            </div>
        );
    }

    const renderAdminApprovalState = () => {
        return (
            <div className="w-r u-s-m-b-30">
                <div className="w-r__container">
                    <div id="gifticon-info-wrap" className="w-r__wrap-1">
                        <GifticonItemImage url={item.imageUrl}/>

                        <div id="gifticon-info" className="w-r__info">
                            {renderErrorInfo(item.brand, "브랜드 이름이 존재하지 않습니다")}
                            {renderErrorInfo(item.productName, "상품명이 존재하지 않습니다")}
                            {renderErrorInfo(item.barcode, "바코드 번호가 존재하지 않습니다")}
                            {renderErrorInfo(item.due, "유효기간이 존재하지 않습니다")}
                            <GifticonHiddenInfo content={item.status}></GifticonHiddenInfo>
                            <GifticonHiddenInfo content={item.flagInDb}></GifticonHiddenInfo>
                        </div>
                    </div>

                    <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                        <span>상품 검수 진행중 입니다.</span>
                        <WhiteButton innerText="삭제" _onClick={deleteStorage}/>
                    </div>
                </div>
            </div>

        )
    }

    const renderFailRegistrationState = () => {
        return (
            <div className="w-r u-s-m-b-30">
                <div className="w-r__container">
                    <div id="gifticon-info-wrap" className="w-r__wrap-1">
                        <GifticonItemImage url={item.imageUrl}/>

                        <div id="gifticon-info" className="w-r__info">
                            {renderErrorInfo(item.brand, "브랜드 이름이 존재하지 않습니다")}
                            {renderErrorInfo(item.productName, "상품명이 존재하지 않습니다")}
                            {renderErrorInfo(item.barcode, "바코드 번호가 존재하지 않습니다")}
                            {renderErrorInfo(item.due, "유효기간이 존재하지 않습니다")}
                            <GifticonHiddenInfo content={item.status}></GifticonHiddenInfo>
                            <GifticonHiddenInfo content={item.flagInDb}></GifticonHiddenInfo>
                        </div>
                    </div>

                    <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                        <WhiteButton innerText="삭제" _onClick={deleteStorage}/>
                        <PrimaryButton innerText="등록 하기" _onClick={() => openModal()}/>
                    </div>

                    <NewsletterModal item={item} isOpen={isOpen} closeModal={closeModal}/>
                </div>
            </div>
        );
    }

    const renderMyGifticonDefault = () => {
        return (
            <div className="w-r u-s-m-b-30">
                <div className="w-r__container">
                    <div id="gifticon-info-wrap" className="w-r__wrap-1">
                        <GifticonItemImage url={item.imageUrl}/>

                        <div id="gifticon-info" className="w-r__info">
                            {renderErrorInfo(item.brandName, "")}
                            {renderErrorInfo(item.productName, "")}
                            {renderErrorInfo(item.barcode, "")}
                            {renderErrorInfo(item.due, "")}
                            <GifticonHiddenInfo content={item.gifticonStatus}/>
                        </div>
                    </div>

                    <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                        <WhiteButton innerText="사용" _onClick={handleUseClick}/>
                        <PrimaryButton innerText="판매 하기" _onClick={handleSellClick}/>
                    </div>
                </div>
            </div>
        );

    }


    const renderMyGifticonOnSale = () => {
        return (
            <div className="w-r u-s-m-b-30">
                <div className="w-r__container">
                    <div id="gifticon-info-wrap" className="w-r__wrap-1">
                        <GifticonItemImage url={item.imageUrl}/>

                        <div id="gifticon-info" className="w-r__info">
                            {renderErrorInfo(item.brandName, "")}
                            {renderErrorInfo(item.productName, "")}
                            {renderErrorInfo(item.barcode, "")}
                            {renderErrorInfo(item.due, "")}
                            <GifticonHiddenInfo content={item.gifticonStatus}/>
                        </div>
                    </div>

                    <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                        <WhiteButton innerText="가격변경" _onClick={handleChangePriceClick}/>
                        <PrimaryButton innerText="판매 취소" _onClick={handleCancelSaleClick}/>
                    </div>
                </div>
            </div>
        );
    }

    const renderMyGifticonUsed = () => {
        return (
            <div className="w-r u-s-m-b-30">
                <div className="w-r__container">
                    <div id="gifticon-info-wrap" className="w-r__wrap-1">
                        <GifticonItemImage url={item.imageUrl}/>

                        <div id="gifticon-info" className="w-r__info">
                            {renderErrorInfo(item.brandName, "")}
                            {renderErrorInfo(item.productName, "")}
                            {renderErrorInfo(item.barcode, "")}
                            {renderErrorInfo(item.due, "")}
                            <GifticonHiddenInfo content={item.gifticonStatus}/>
                        </div>
                    </div>

                    <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                        <WhiteButton innerText="재사용" _onClick={handleReUseClick}/>
                        <PrimaryButton innerText="삭제하기" _onClick={deleteGifticon}/>
                    </div>
                </div>
            </div>
        );
    }

    function renderMyGifticonExpired() {
        return (
            <div className="w-r u-s-m-b-30">
                <div className="w-r__container">
                    <div id="gifticon-info-wrap" className="w-r__wrap-1">
                        <GifticonItemImage url={item.imageUrl}/>

                        <div id="gifticon-info" className="w-r__info">
                            {renderErrorInfo(item.brandName, "")}
                            {renderErrorInfo(item.productName, "")}
                            {renderErrorInfo(item.barcode, "")}
                            {renderErrorInfo(item.due, "")}
                            <GifticonHiddenInfo content={item.gifticonStatus}/>
                        </div>
                    </div>

                    <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                        <PrimaryButton innerText="삭제하기" _onClick={deleteGifticon}/>
                    </div>
                </div>
            </div>
        );
    }


    // 기프티콘 등록
    if (item.status === "WAIT_REGISTRATION") {
        screen = renderWaitRegistrationState();
    } else if (item.status === "NEED_APPROVAL") {
        screen = renderNeedApprovalState();
    } else if (item.status === "ADMIN_APPROVAL") {
        screen = renderAdminApprovalState();
    } else if (item.status === "FAIL_REGISTARTION") {
        screen = renderFailRegistrationState();
    }

    // 내 기프티콘 리스트
    if (item.gifticonStatus === "NONE") {
        screen = renderMyGifticonDefault(); // 사용완료시 -> FINISHED
    }
    if (item.gifticonStatus === "ONSALE") {
        screen = renderMyGifticonOnSale();
    }
    if (item.gifticonStatus === "FINISHED") {
        screen = renderMyGifticonUsed();
    }
    if (item.gifticonStatus === "EXPIRED") {
        screen = renderMyGifticonExpired();
    }


    return (
        screen
    )
}