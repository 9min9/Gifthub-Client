import {useState} from "react";

export default function useGifticonAddFormInput(initialValues = {}) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (name, value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name] : value,
        }));
    };

    return {
        values,
        onChange: handleChange,
    };
}