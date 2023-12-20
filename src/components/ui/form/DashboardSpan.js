

export default function DashboardSpan(props) {

    const {innerText} = props;

    return(
        <span id="name" className="dash__text">{innerText}</span>
    );
}