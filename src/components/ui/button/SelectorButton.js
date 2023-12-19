import Label from "../form/Label";

export default function Select(props) {
    const {placeholder, _onChange, options, labelText, target, innerText} = props;

    return (
        <div>
            <Label htmlFor={target} labelText={labelText}></Label>

            <select className="select-box select-box--primary-style u-w-100"
                    name={target}
                    placeholder={placeholder}
                    onChange={_onChange}
            >
                <option value="">{placeholder}</option>
                {options.map((option, index) => (
                    <option key={option} value={option}>
                        {innerText[index]}
                    </option>
                ))}
            </select>
        </div>
    );
}