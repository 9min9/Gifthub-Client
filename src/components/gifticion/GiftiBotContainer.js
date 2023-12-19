import GifticonItemImage from "./GifticonItemImage";
import PrimaryButton from "../ui/button/PrimaryButton";

export default function GiftiBotContainer({item}) {


    return (
        <div className="w-r u-s-m-b-30">
            <div className="w-r__container">
                <div id="gifticon-info-wrap" className="w-r__wrap-1">
                    <GifticonItemImage url={item.imageUrl}></GifticonItemImage>

                    <div id="gifticon-info" className="w-r__info">
                        <span className="w-r__name"><a>{item.intro}</a></span>
                    </div>
                </div>

                <div id="gifticon-btn-wrap" className="w-r__wrap-2">
                    <PrimaryButton innerText="추가"></PrimaryButton>
                </div>
            </div>

        </div>

    );

}