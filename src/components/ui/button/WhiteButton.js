

export default function Button(props) {
    const {target, innerText, _onClick} = props;
    let id = target + "-btn";

    return (
        <button id= {id} className="w-r__link btn--e-transparent-platinum-b-2" onClick={_onClick}>{innerText}</button>
    )
}