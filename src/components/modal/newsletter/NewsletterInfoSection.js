import NewsletterModalHead from "./NewsletterModalHead";
import NewsletterModalTitleWrapper from "./NewsletterModalTitleWrapper";
import NewsletterModalSubSubTitleWrapper from "./NewsletterModalSubSubTitleWrapper";
import GifticonAddForm from "../../gifticion/GifticonAddForm";

export default function NewsletterInfoSection({item}) {
    return(
        <div className="col-lg-6 new-l__col-2">
            <div className="new-l__section u-s-m-t-30">
                <NewsletterModalHead>
                    <NewsletterModalTitleWrapper innerText={"기프티콘 등록하기"}/>
                    <NewsletterModalSubSubTitleWrapper innerText={"기프티콘 정보를 확인해주세요"}/>
                </NewsletterModalHead>

                <GifticonAddForm item={item}/>
            </div>
        </div>
    );
}