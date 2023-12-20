import Input from "../../ui/form/Input";
import Label from "../../ui/form/Label";

export default function SignupInputWrapper(prop) {

    const {target, labelText, type, placeholder, _onChange, _onBlur} = prop;


    let id = "signup-" + target + "-div";

    return (
        <div id={id}>
            <Label htmlFor={target} labelText={labelText}></Label>
            <Input name={target} type={type} placeholder={placeholder} _onChange={_onChange} _onBlur={_onBlur}> </Input>
        </div>
    );

}