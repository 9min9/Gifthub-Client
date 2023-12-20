import MessageDiv from "../../ui/form/MessageDiv";

export default function MessageWrapper(props) {
    return (
        <div>
            <div className="u-s-m-b-30">
                <MessageDiv color={props.color} innerText={props.innerText}></MessageDiv>
            </div>
        </div>


    )
}