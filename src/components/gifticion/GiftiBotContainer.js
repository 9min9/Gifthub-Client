import GifticonItemImage from "./GifticonItemImage";
import PrimaryButton from "../ui/button/PrimaryButton";
import {useState} from "react";
import GifticonAddModal from "./GifticonAddModal";

export default function GiftiBotContainer({item}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModalClick = () => {
        console.log("handleOpenModalClick is triggered")

        setIsOpen(!isOpen);
    }


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
                    <PrimaryButton
                        innerText="추가"
                        _onClick={handleOpenModalClick}
                    >
                    </PrimaryButton>
                </div>
                <GifticonAddModal isOpen={isOpen}/>
                {/*{isOpen ?}*/}
            </div>

        </div>

    );

}