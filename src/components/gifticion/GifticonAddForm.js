import Label from "../ui/form/Label";
import NewsletterInputWrapper from "../modal/newsletter/NewsletterInputWrapper";

export default function GifticonAddForm() {
    return(
        <form id="gifticon-add-form" className="new-l__form">

            <NewsletterInputWrapper labelText={"상품 이름"} inputClassName={"news-l__input"} name={"productName"} type={"text"} placeholder={"상품 이름을 입력해주세요"}></NewsletterInputWrapper>

            <div id="error-product-div" className="u-s-m-b-10">
                <Label labelText={""}></Label>
                <label id="error-product-modal-label" className="gl-label"></label>
            </div>
            <NewsletterInputWrapper labelText={"브랜드 이름"} inputClassName={"news-l__input"} name={"brandName"} type={"text"} placeholder={"브랜드 이름을 입력해주세요"}></NewsletterInputWrapper>

            <div id="error-brand-div" className="u-s-m-b-10">
                <label id="error-brand-modal-label" className="gl-label"></label>
            </div>

            <NewsletterInputWrapper labelText={"유효 기간"} inputClassName={"news-l__input"} name={"due"} type={"date"} placeholder={"유효기간을 선택해주세요"}></NewsletterInputWrapper>

            <div id="error-due-div" className="u-s-m-b-10">
                <label id="error-due-modal-label" className="gl-label"></label>
            </div>

            <NewsletterInputWrapper labelText={"바코드 번호"} inputClassName={"news-l__input"} name={"barcode"} type={"number"} placeholder={"바코드 번호를 입력해주세요"}></NewsletterInputWrapper>

            <div id="error-barcode-div" className="u-s-m-b-10">
                <label id="error-barcode-modal-label" className="gl-label"></label>
            </div>

            <NewsletterInputWrapper labelText={"구매 가격"} inputClassName={"news-l__input"} name={"price"} type={"number"} placeholder={"구매 가격을 입력해주세요"}></NewsletterInputWrapper>

            <div id="error-price-div" className="u-s-m-b-10">
                <label id="error-price-modal-label" className="gl-label"></label>
            </div>

            <div className="u-s-m-y-15">
                <a id="gifticon-add-modal-btn" className="btn btn--e-brand-b-2">등록</a>
            </div>
        </form>
    );

}