import RouteBoxLink from "./RouteBoxLink";

export default function RouteBox(props) {

    const {innerText} = props;

    return (
        <div className="route-box">
            <div className="route-box__g">
                <RouteBoxLink innerText={innerText}></RouteBoxLink>
            </div>
        </div>
    )
}