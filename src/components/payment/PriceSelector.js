/**
 * Point 배열을 받아서 라디오박스를 만듦
 */
import RadioBox from "./RadioBox";
import InputNumber from "../ui/form/InputNumber";
import {useEffect, useState} from "react";

export default function PriceSelector({points, setPoints, value, setValue}) {
    const handleClick = (event) => {
        const index = points.findIndex(point => point.point === parseInt(event.target.value));

        let pointsCopy = [...points];

        pointsCopy.forEach(point => point.checked = false);

        pointsCopy[index].checked = true;

        setPoints(pointsCopy);
    }

    useEffect(() => {
        setValue(points.filter(point => point.checked)[0].point);

        console.log(value);
    }, [points]);



    let elements = points.map((point) => <RadioBox point={point.point} setPoints={setPoints} checked={point.checked}
                                                   handleClick={handleClick}/>);

    return (
        <div className={"u-s-m-b-30"}>
            <label className={"gl-label"} htmlFor={"point"}>
                {elements}
            </label>
            <InputNumber className={"input-text input-text--primary-style float-right width-50p u-s-m-y-30"}
                         id={"point"} value={value}/>
        </div>
    );
}