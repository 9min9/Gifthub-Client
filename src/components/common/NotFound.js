import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import OutlineButton from "../ui/button/OutlineButton";

export default function NotFound(props) {
    const {target, innerText} = props;
    const navigate = useNavigate();

    const [counter, setCounter] = useState(5); // 5초 카운터 설정

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prevCounter => prevCounter > 0 ? prevCounter - 1 : 0); // 카운터 감소
        }, 1000);
        const redirectTimer = setTimeout(() => {
            navigate('/');
        }, 5000);
        return () => {
            clearInterval(timer); // 컴포넌트 unmount 시 타이머 해제
            clearTimeout(redirectTimer); // 컴포넌트 unmount 시 리다이렉트 타이머 해제
        }
    }, [navigate]);

    let id = target + "-btn";
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <button id={id} className="btn--icon" type="button">
                <div>
                    <img src="/images/logo/NotFoundLOgo.png" className="btn u-img-fluid"/>
                    <div style={{margin: '10px'}}> {counter}초 후에 메인 페이지로 이동합니다.</div>

                </div>

            </button>

        </div>
    )
}
