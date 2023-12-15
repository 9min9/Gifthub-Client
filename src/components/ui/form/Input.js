
export default function Input(props) {
    const {name, type, placeholder, _onChange} = props;

    Input.defaultProps = {
        name : "name",
        label: '텍스트',
        type: "text",
        placeholder: '텍스트를 입력해주세요',
    };

    return (
        <div>
            <input className="input-text input-text--primary-style" name={name} type={type} placeholder={placeholder} onChange={_onChange}/>
        </div>
    );


}