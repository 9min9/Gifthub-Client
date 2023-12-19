export default function RouteBoxLink(props) {
    const {innerText} = props;
    return(
        <a className="route-box__link">{innerText}</a>
    )
}