import {Link} from "react-router-dom";


export default function GlLink(props) {
    const {href, innerText} = props;

    return (
        <Link to={href} className="gl-link">{innerText}</Link>
    );


}