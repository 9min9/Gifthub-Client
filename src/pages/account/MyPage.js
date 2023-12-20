import Sidebar from "../../components/common/Sidebar";
import MyPageContentSection from "../../components/mypage/MyPageContentSection";
import {useEffect, useState} from "react";
import axios from "axios";

export default function MyPage() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        axios
            .post("http://localhost:8081/api/users/myinfo", {}, {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (response) {
                response.data.gender = convertGender(response.data);
                setUserInfo(response.data);
            })
    }, []);

    const convertGender = (data) => {

        if(data.gender == "M") {
           data.gender = "남자";
        }

        if(data.gender == "F") {
           data.gender = "여자";
        }
        return data.gender;
    }

    return (
        <div className="app-content">
            <div className="u-s-p-y-60">
                <div className="section__content">
                    <div className="dash">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12">
                                    <Sidebar></Sidebar>
                                </div>

                                <div className="col-lg-9 col-md-12">
                                    <MyPageContentSection userInfo={userInfo}></MyPageContentSection>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}