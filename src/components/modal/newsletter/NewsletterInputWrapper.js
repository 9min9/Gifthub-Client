import Label from "../../ui/form/Label";
import Input from "../../ui/form/Input";

export default function NewsletterInputWrapper(props) {
    const {labelText, inputClassName, name, type, value, placeholder, _onChange} = props;

    return(
        <div className="u-s-m-b-5">
            <Label labelText={labelText}></Label>
            <Input className={inputClassName} name={name} value={value} type={type} placeholder={placeholder} _onChange={_onChange}></Input>
        </div>
    );
}