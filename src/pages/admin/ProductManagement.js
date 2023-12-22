import ProductManagementSection from "../../components/admin/product/ProductManagementSection";
import AdminSidebar from "../../components/admin/AdminSidebar";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ProductManagement() {
    const [storageList, setStorageList] = useState([]);

    useEffect(() => {
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/admin/gifticon/confirm/list`, null ,{headers: {Authorization: localStorage.getItem("token")}})
            .then(function (response) {
                console.log(response.data.content);
                setStorageList(response.data.content);
            })

    }, []);

    return (
        <div className="app-content">
            <div className="u-s-p-y-60">
                <div className="section__content">
                    <div className="dash">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-3 col-md-12">
                                    <AdminSidebar></AdminSidebar>
                                </div>

                                <div className="col-lg-9 col-md-12">
                                    <ProductManagementSection itemList={storageList}></ProductManagementSection>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}