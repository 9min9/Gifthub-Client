import React from 'react';
import Label from "./Label";

export default function SelectorButton({target, labelText, title, options, handleSelectChange}) {
    let id = target;

    return (

        <div>
            <Label htmlFor={target} labelText={labelText}></Label>
            <select id={id} onChange={handleSelectChange} class="select-box select-box--primary-style u-w-100">
                <option value="">{title}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
