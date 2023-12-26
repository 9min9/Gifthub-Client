import Sidebar from "../../components/common/Sidebar";
import OrderHistorySection from "../../components/history/order/OrderHistorySection";
import MyPageTitleContainer from "../../components/mypage/MyPageTitleContainer";
import {useEffect, useState} from "react";
import axios from "axios";

export default function OrderHistory() {

    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(0);

    const size = 12;

    const fetchOrders = (replace) => {
        if (replace) {
            setOrders([]);
        }

        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/movements?page=${page}&size=${size}`,
            {headers: {Authorization: localStorage.getItem("token")}})
            .then((result) => {
                if (replace) {
                    setOrders(result.data.content);
                } else {
                    let updateOrders = [...orders];

                    setOrders(updateOrders.concat(result.data.content));
                }
            }).catch((result) => alert(result.response.data.message));
    }

    const increasePage = () => {
        setPage((page) => page + 1);
    }

    useEffect(() => {
        fetchOrders(true);
    }, []);

    useEffect(() => {
        if (page !== 0) {
            fetchOrders(false);
        }
    }, [page]);

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
                                    <div
                                        className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                        <div className="dash__pad-2">
                                            <MyPageTitleContainer title="내 구매 내역"
                                                                  subTitle="기프티콘 구매 내역 입니다"></MyPageTitleContainer>
                                            <OrderHistorySection orders={orders}
                                                                 increasePage={increasePage}></OrderHistorySection>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}