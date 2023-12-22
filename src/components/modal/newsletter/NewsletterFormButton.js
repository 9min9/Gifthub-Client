

export default function NewsletterFormButton(props) {

    const {innerText, _onClick} = props

    return(
        <div className="u-s-m-y-15">
            <a id="gifticon-add-modal-btn" className="btn btn--e-brand-b-2" onClick={_onClick}>{innerText}</a>
        </div>
    );

}