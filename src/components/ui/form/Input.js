export default function Input(props) {
    const {className, name, type, placeholder, _onChange, _onBlur} = props;

    return (
        <div>
            <input className={className} name={name} type={type} placeholder={placeholder} onChange={_onChange} onBlur={_onBlur}/>
        </div>
    );


}