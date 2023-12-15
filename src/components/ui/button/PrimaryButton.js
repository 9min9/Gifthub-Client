

export default function PrimaryButton(props) {
    const {target, innerText, _onClick} = props;

    let id = target + "-btn";

    return (
        <button id= {id} className="w-r__link btn--e-brand-b-2" onClick={_onClick}>{innerText}</button>
    )
}