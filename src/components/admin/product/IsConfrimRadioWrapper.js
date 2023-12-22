
export default function IsConfrimRadioWrapper(props) {

    const {value, _onChange} = props;
    let labelText;

    if(value) {
        labelText = "등록"
    } else {
        labelText = "거절"
    }

    return(
        <div className="radio-box newsletter__radio">
            <input id="confirm" name="isConfirm" type="radio" value={value} onChange={_onChange}/>
            <div className="radio-box__state radio-box__state--primary">
                <label className="radio-box__label" htmlFor="confirm" style={{color: "black"}}>{labelText}</label>
            </div>
        </div>
    );
}