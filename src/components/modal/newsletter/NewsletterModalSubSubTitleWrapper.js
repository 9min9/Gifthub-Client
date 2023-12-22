

export default function NewsletterModalSubSubTitleWrapper(props) {

    const {innerText, errorText, errorDetail} = props;

    return(
        <div className="u-s-m-b-30 new-l--center">
            <p id="product-valid" className="new-l__p1">{innerText}</p>
            <p id="product-valid-error" className="new-l__p1" style={{color:"red"}}>{errorText}</p>
            <p id="product-valid-error" className="new-l__p1" style={{color:"red"}}>{errorDetail}</p>
            <input id="status-modal-input" name="status" className="news-l__input" type="hidden"/>
        </div>
    );
}