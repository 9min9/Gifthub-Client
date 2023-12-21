export default function PrimaryBtn({id, innerText, _onClick}) {
    return <button id={id} className="btn btn--e-brand-b-2" onClick={_onClick} type={"button"}>{innerText}</button>
};