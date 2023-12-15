export default function Label(props) {
    const {htmlFor, labelText} = props;

    return(
        <label className="gl-label" htmlFor={htmlFor}>{labelText}</label>
    )




}