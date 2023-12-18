/**
 * Point 배열을 받아서 라디오박스를 만듦
 */
import RadioBox from "./RadioBox";
import InputNumber from "../ui/form/InputNumber";

export default function PriceSelectorWrapper({handleClick, handleChange, value, points}) {
    let elements = points.map((point) => <RadioBox point={point.point} checked={point.checked}
                                                   handleClick={handleClick}/>);

    return (
        <div className={"u-s-m-b-30"}>
            <label className={"gl-label"} htmlFor={"point"}>
                {elements}
            </label>
            <InputNumber className={"input-text input-text--primary-style float-right width-50p u-s-m-y-30"}
                         id={"point"} value={value} handleChange={handleChange}/>
        </div>
    );
}