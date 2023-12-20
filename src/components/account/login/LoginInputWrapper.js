import Input from "../../ui/form/Input";
import Label from "../../ui/form/Label";

export default function LoginInputWrapper(prop) {

    const {target, labelText, type, placeholder, _onChange} = prop;

    let id = "login-" + target + "-div";

    return(
        <div id={id} className="u-s-m-b-30">
            <Label htmlFor={target} labelText={labelText}></Label>
            <Input className={"input-text input-text--primary-style"} name={target} type={type} _onChange={_onChange} placeholder={placeholder}></Input>
        </div>
    );

}