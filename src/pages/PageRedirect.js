import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function PageRedirect() {
    let navigate = useNavigate();

    useEffect(() => {
        navigate(-1);
    }, []);

    return(
        <>
        </>);
}