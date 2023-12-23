import React from "react";
import {Route, Redirect} from 'react-router-dom';
import OutlineButton from "../ui/button/OutlineButton";

export default function NotForbidden() {
    return (
        <div>
            <h1> 403</h1>
            <OutlineButton></OutlineButton>
        </div>
    )

}
