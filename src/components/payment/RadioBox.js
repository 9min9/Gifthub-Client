import RadioButton from "../ui/form/RadioButton";

export default function RadioBox({point, handleClick, checked}) {
    return <div className="radio-box">
        <RadioButton id={`point-${point}`} name={`point`} value={point} checked={checked} handleClick={handleClick}/>
        <div className="radio-box__state radio-box__state--primary">
            <label className="radio-box__label" htmlFor={"point-" + point}>{point}</label>
        </div>
    </div>
}