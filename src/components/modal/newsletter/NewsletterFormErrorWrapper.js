
export default function NewsletterFormErrorWrapper(props) {

    const {field, innerText} = props

    const labelId = "error-" + field + "-modal-label";

    return(
        <div id="error-barcode-div" className="u-s-m-b-10">
            <label id={labelId} className="gl-label" style={{color:"red"}}>{innerText}</label>
        </div>
    );
}