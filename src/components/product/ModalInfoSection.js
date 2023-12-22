import NewsletterModalHead from "../modal/newsletter/NewsletterModalHead";
import NewsletterModalTitleWrapper from "../modal/newsletter/NewsletterModalTitleWrapper";
import ImageModalTableContainer from "./ImageModalTableContainer";

export default function ModalInfoSection({title, contentList}) {
    return <NewsletterModalHead>
        <div>
            <NewsletterModalTitleWrapper innerText={title}></NewsletterModalTitleWrapper>
            <ImageModalTableContainer contentList={contentList}/>
        </div>
    </NewsletterModalHead>
};