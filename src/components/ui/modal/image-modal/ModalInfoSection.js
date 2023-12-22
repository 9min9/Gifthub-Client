import NewsletterModalHead from "../../../modal/newsletter/NewsletterModalHead";
import NewsletterModalTitleWrapper from "../../../modal/newsletter/NewsletterModalTitleWrapper";
import NewsletterModalSubSubTitleWrapper from "../../../modal/newsletter/NewsletterModalSubSubTitleWrapper";

export default function ModalInfoSection({title, subTitle}) {
    return <NewsletterModalHead>
        <NewsletterModalTitleWrapper innerText={title}></NewsletterModalTitleWrapper>
        <NewsletterModalSubSubTitleWrapper innerText={subTitle}></NewsletterModalSubSubTitleWrapper>
    </NewsletterModalHead>
};