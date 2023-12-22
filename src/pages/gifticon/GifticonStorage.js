import GifticonItemSection from "../../components/gifticion/GifticonItemSection";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../components/account/AuthContextProvider";

export default function GifticonStorage() {
    const [storageList,setStorageList] = useState([]);

    const auth = useContext(AuthContext);

    useEffect(() => {
        getStorage();
    }, []);

    useEffect(() => {
        console.log(storageList);
    }, [storageList]);

    const getStorage = async () => {
        await axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/storage/list`, null, {headers: {Authorization: localStorage.getItem("token")}})

            .then(function (response) {
                console.log(response.data.content)
                setStorageList(response.data.content);
            })
    }

    return (
        <div className="app-content">
            <GifticonItemSection itemList={storageList}></GifticonItemSection>
        </div>)
}