import RadioButton from "../ui/form/RadioButton";

export default function Payment(props) {
  let {money} = props;

  let element = money.map((m) => {
    return <div className="radio-box">
      <RadioButton id={`point-${m}`} name={`point`} value={m} checked={false}/>
      <div className="radio-box__state radio-box__state--primary">
        <label className="radio-box__label" htmlFor="point-5000">5000</label>
      </div>
    </div>
  });

  return {element}

}