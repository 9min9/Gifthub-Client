/**태두리에만 색이 칠해져있는 버튼 */
export default function OutlineButton(props) {
    const {target, innerText, _onClick} = props;

    let id = target + "-btn";

    return (
        <button id={id} className="btn btn--e-transparent-brand-b-2" onClick={_onClick}>{innerText}</button>
    )
}