import Input from "../../ui/form/Input";
import Label from "../../ui/form/Label";

export default function LoginInputWrapper(prop) {

    const {target, labelText, type, placeholder} = prop;
    console.log(target);

    let id = "login-" + target + "-div";

    return(
        <div id={id} className="u-s-m-b-30">
            <Label htmlFor={target} labelText={labelText}></Label>
            <Input name={target} type={type} placeholder={placeholder}></Input>
        </div>
    );

}