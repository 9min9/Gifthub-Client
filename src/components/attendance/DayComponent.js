export default function DayComponent({day, today, dayCounter, handleTodayClick, attendance}) {
    if (dayCounter === 6) {
        if (day.checked || (attendance && today.getDate() === day.day)) {
            return <>
                <div className={"unit-box attendance"}>
                    {day.day}
                </div>
                <br/>
            </>
        } else {
            if (day.day < today.getDate()) {
                return <>
                    <div className={"unit-box unattendance"}>
                        {day.day}
                    </div>
                    <br/>
                </>
            } else if (day.day === today.getDate()) {
                return <>
                    <div className={"unit-box today"} onClick={handleTodayClick}>
                        {day.day}
                    </div>
                    <br/>
                </>
            } else {
                return <>
                    <div className={"unit-box"}>
                        {day.day}
                    </div>
                    <br/>
                </>
            }
        }
    } else {
        if (day.checked || (attendance && today.getDate() === day.day)) {
            return <>
                <div className={"unit-box attendance"}>
                    {day.day}
                </div>
            </>
        } else {
            if (day.day < today.getDate()) {
                return <>
                    <div className={"unit-box unattendance"}>
                        {day.day}
                    </div>
                </>
            } else if (day.day === today.getDate()) {
                return <>
                    <div className={"unit-box today"} onClick={handleTodayClick}>
                        {day.day}
                    </div>
                </>
            } else {
                return <>
                    <div className={"unit-box"}>
                        {day.day}
                    </div>
                </>
            }
        }
    }
};