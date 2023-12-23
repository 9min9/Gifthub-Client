import React from "react";
import {useNavigate} from "react-router-dom";
import OutlineButton from "../ui/button/OutlineButton";

export default function NotFound(props) {
    const {innerText} = props
    return (
        <div>
            <h1> 404</h1>
            <OutlineButton innerTest={innerText}></OutlineButton>
        </div>
    )
}

