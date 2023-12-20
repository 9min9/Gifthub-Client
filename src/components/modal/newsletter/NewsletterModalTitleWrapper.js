import NewsletterH3 from "./NewsletterH3";

export default function NewsletterModalTitleWrapper(props) {
    const {innerText} = props

    return(
        <div className="u-s-m-b-8 new-l--center">
            <NewsletterH3 innerText={innerText}></NewsletterH3>
        </div>
    );
}