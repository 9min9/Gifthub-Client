export default function InputNumber({className, id, value, handleChange}) {
    return <input type={"number"} className={className} id={id} value={value} onChange={handleChange}/>
}