export default function RadioButton({id, name, value, checked, handleClick}) {
    return <input type="radio" id={id} name={name} checked={checked} value={value} onClick={handleClick}/>;
}