export default function ConfirmResultSelector({item, title, handleChange}) {
    let name;

    if (title === "카테고리") {
        name="category"
    }

    if(title === "거절사유") {
        name = "rejectReason";
    }

    const handleSelectChange = (e) => {
        const select = e.target.value;
        handleChange(select);
    };

    return (
        <div id="confirm-result-div">
            <select id="result-select" name={name}
                    className="select-box select-box--primary-style u-w-100"
                    onChange={handleSelectChange}>
                <option selected="" value="">{title}</option>
                {Object.entries(item).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                ))}

            </select>
        </div>
    )
}