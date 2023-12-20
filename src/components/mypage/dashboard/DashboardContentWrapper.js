import DashboardH2 from "../../ui/dashboard/DashboardH2";
import DashboardSpan from "../../ui/dashboard/DashboardSpan";


export default function DashboardContentWrapper(props) {
    const {title, content} = props

    return(
        <div className="col-lg-4 u-s-m-b-30">
            <DashboardH2 innerText={title}></DashboardH2>
            <DashboardSpan innerText={content}></DashboardSpan>
        </div>
    );
}