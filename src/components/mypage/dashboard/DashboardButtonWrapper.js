import DashOutlineButton from "../../ui/button/DashOutlineButton";


export default function DashboardButtonWrapper(props) {

    const {innerText} = props;

    return(
        <div className="col-lg-12 u-s-m-b-15">
            <div className="u-s-m-b-15" style={{display: "flex", justifyContent: "end"}}>
                <DashOutlineButton innerText={innerText}></DashOutlineButton>
            </div>
        </div>
    );

}