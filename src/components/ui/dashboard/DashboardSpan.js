

export default function DashboardSpan(props) {

    const {innerText, margin} = props;
    const className = "dash__text " + margin;

    return(
        <span id="name" className={className}>{innerText}</span>
    );
}