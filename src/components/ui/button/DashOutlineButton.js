import {Link} from "react-router-dom";


export default function DashOutlineButton(props) {
    const {id, innerText, _onClick} = props;

    return(
        <Link to={"/"} className="dash__custom-link btn--e-transparent-brand-b-2">{innerText}</Link>
        // <a id={id} className="dash__custom-link btn--e-transparent-brand-b-2" onClick={_onClick}>{innerText}</a>
    )
}