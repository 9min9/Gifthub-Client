

export default function DashTextButton(props) {

    const {innerText, _onClick} = props;
    return(
        <div className={"dash__link dash__link--brand"}>
            <a>{innerText}</a>
        </div>
    )
}