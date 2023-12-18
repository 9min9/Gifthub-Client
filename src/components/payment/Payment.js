import PaymentSection from "./PaymentSection";
import {useContext} from "react";
import {AuthContext} from "../account/AuthContextProvider";
import Login from "../../pages/account/Login";

export default function Payment() {
    const {isAuthenticated} = useContext(AuthContext);

    if (isAuthenticated) {
        return <PaymentSection/>;
    } else {
        return <Login/>;
    }

}
