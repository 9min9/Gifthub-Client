export default function Input(props) {
    const {name, type, placeholder, _onChange, _onBlur} = props;

    return (
        <div>
            <input className="input-text input-text--primary-style" name={name} type={type} placeholder={placeholder}
                   onChange={_onChange} onBlur={_onBlur}/>
        </div>
    );


}