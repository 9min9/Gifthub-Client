

export default function WhiteButton(props) {
    const {target, innerText, _onClick} = props;
    let id = target + "-btn";

    return (
        <a id= {id} className="w-r__link btn--e-transparent-platinum-b-2" onClick={_onClick}>{innerText}</a>
    )
}