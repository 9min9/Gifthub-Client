/** 배경색 칠해져있는 버튼  */

// TODO 이름 바꿔야함
export default function PrimaryButton(props) {
    const {target, innerText, _onClick} = props;

    let id = target + "-btn";

    return (
        <a id={id} className="w-r__link btn--e-brand-b-2" onClick={_onClick}>{innerText}</a>
    )
}