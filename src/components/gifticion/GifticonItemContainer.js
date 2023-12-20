import GifticonItemImage from "./GifticonItemImage";
import GifticonItemInfo from "./GifticonItemInfo";
import PrimaryButton from "../ui/button/PrimaryButton";
import WhiteButton from "../ui/button/WhiteButton";


export default function GifticonItemContainer({item}) {

    //todo : 값이 없으면 error로 보내기

    return (

        <div className="w-r u-s-m-b-30">
            <div className="w-r__container">
                <div id="gifticon-info-wrap" className="w-r__wrap-1">
                    <GifticonItemImage url={item.imageUrl}></GifticonItemImage>

                    <div id="gifticon-info" className="w-r__info">
                        <GifticonItemInfo id={item.id} content={item.brand}></GifticonItemInfo>
                        <GifticonItemInfo id={item.id} content={item.productName}></GifticonItemInfo>
                        <GifticonItemInfo id={item.id} content={item.barcode}></GifticonItemInfo>
                        <GifticonItemInfo id={item.id} content={item.due}></GifticonItemInfo>
                    </div>
                </div>

                <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                    <WhiteButton innerText="삭제"></WhiteButton>
                    <PrimaryButton innerText="등록 하기"></PrimaryButton>
                </div>
            </div>

        </div>
    )
}