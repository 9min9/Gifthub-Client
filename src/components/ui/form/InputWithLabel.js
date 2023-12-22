export default function InputWithLabel({id, placeholder, handleSearchChange, searchInput, handleSearchKeyUp}) {
    return <>
        <label htmlFor={id}></label>
        <input className="input-text input-text--border-radius input-text--style-1" type="text"
               id={id} placeholder={placeholder} value={searchInput} onChange={handleSearchChange}
               onKeyUp={handleSearchKeyUp}/>
    </>;
}