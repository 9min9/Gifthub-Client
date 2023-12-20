

export default function DashboardH2(props) {
    const {innerText, margin} = props;
    const className = "dash__h2 " +margin;

    return(
        <h2 className={className}>{innerText}</h2>
    )
}