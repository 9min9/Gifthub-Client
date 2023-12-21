import GifticonItemImage from "./GifticonItemImage";
import GifticonItemInfo from "./GifticonItemInfo";
import PrimaryButton from "../ui/button/PrimaryButton";
import WhiteButton from "../ui/button/WhiteButton";
import {useState} from "react";
import NewsletterModal from "../modal/newsletter/NewsletterModal";


export default function GifticonItemContainer({item, _onClick}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModalClick = () => {
        console.log("handleOpenModalClick is triggered")
        setIsOpen(!isOpen);
    }

    //todo : 값이 없으면 error로 보내기
    return (

        <div className="w-r u-s-m-b-30">
            <div className="w-r__container">
                <div id="gifticon-info-wrap" className="w-r__wrap-1">
                    <GifticonItemImage url={item.imageUrl}></GifticonItemImage>

                    <div id="gifticon-info" className="w-r__info">
                        <GifticonItemInfo
                            id={item.id}
                            content={
                                item.brand
                                    ? item.brand
                                    : <span style={{color: 'red'}}>브랜드 이름이 존재하지 않습니다</span>
                            }
                        />
                        <GifticonItemInfo
                            id={item.id}
                            content={
                                item.productName
                                    ? item.productName
                                    : <span style={{color: 'red'}}>상품 이름이 존재하지 않습니다</span>
                            }

                        />
                        <GifticonItemInfo
                            id={item.id}
                            content={
                                item.barcode
                                    ? item.barcode
                                    : <span style={{color: 'red'}}>바코드 번호가 존재하지 않습니다</span>
                            }
                        />
                        <GifticonItemInfo
                            id={item.id}
                            content={
                                item.due
                                    ? item.due
                                    : <span style={{color: 'red'}}>유효기간이 존재하지 않습니다</span>
                            }

                        />
                    </div>
                </div>

                <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                    <WhiteButton innerText="삭제"></WhiteButton>
                    <PrimaryButton innerText="등록 하기" _onClick={handleOpenModalClick}></PrimaryButton>
                </div>
            </div>

            <NewsletterModal isOpen={isOpen} setIsOpen={setIsOpen}></NewsletterModal>
        </div>

    )
}