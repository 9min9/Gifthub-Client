
export default function DashboardH1(props) {
    const {innerText, margin} = props;
    const className = "dash__h1 " +margin;

    return(
        <h1 className={className}>{innerText}</h1>
    )
}