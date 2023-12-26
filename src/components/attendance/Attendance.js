import Modal from "../ui/modal/image-modal/Modal";
import {useEffect, useState} from "react";
import axios from "axios";
import DayComponent from "./DayComponent";

export default function Attendance({isOpen, handleCloseModalClick, isAuthenticated}) {
    const today = new Date();

    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const [days, setDays] = useState([]);

    const [attendance, setAttendance] = useState(false);

    const handleTodayClick = (event) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/attendances`,
            {}, {headers: {Authorization: localStorage.getItem("token")}})
            .then((result) => {
                event.target.classList.remove(`today`);
                event.target.classList.add(`attendance`);

                setAttendance(true);
            }).catch((result) => alert(result.response.data.message));
    }

    const setDaysByCalendar = () => {
        let updateDays = [];

        if (!localStorage.getItem("token")) {
            return;
        }

        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/attendances`,
            {headers: {Authorization: localStorage.getItem("token")}})
            .then((result) => {
                const checkList = [];
                result.data.forEach((check) => {
                    checkList.push(new Date(check.createDate).getDate());
                })

                for (let i = 0; i < firstDay.getDay(); i++) {
                    updateDays.push({day: null, checked: false});
                }

                for (let i = 1; i <= lastDay.getDate(); i++) {
                    updateDays.push({day: i, checked: checkList.includes(i)});
                }
            }).catch((result) => alert(result.response.data.message));
        ;

        setDays(updateDays);
    }

    let dayCounter = 0;
    const calendar = days.map((day) => {
        return <DayComponent day={day} today={today} dayCounter={dayCounter} handleTodayClick={handleTodayClick}
                             attendance={attendance}/>
    })

    useEffect(() => {
        setDaysByCalendar();
    }, []);

    useEffect(() => {
        setDaysByCalendar();
    }, [isAuthenticated]);

    return <Modal isOpen={isOpen} handleCloseModalClick={handleCloseModalClick}>
        <div className={"row"}>
            <div className="unit-box">일</div>
            <div className="unit-box">월</div>
            <div className="unit-box">화</div>
            <div className="unit-box">수</div>
            <div className="unit-box">목</div>
            <div className="unit-box">금</div>
            <div className="unit-box">토</div>
            {calendar}
        </div>
    </Modal>;
};