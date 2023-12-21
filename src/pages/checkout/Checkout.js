import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import CheckoutSection from "../../components/checkout/CheckoutSection";

export default function Checkout() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [gifticons, setGifticons] = useState([]);
    const [originalPrice, setOriginalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate()

    const pointSelectRef = useRef();

    const fetchGifticon = (gifticonIds) => {
        if (!gifticonIds || gifticonIds.length === 0) {
            setGifticons([]);
            setOriginalPrice(0);
            setPrice(0);

            return;
        }

        let sendData = ``;

        for (let gifticonId of gifticonIds) {
            sendData += `gifticonIds=${gifticonId}&`
        }

        axios.get(`http://localhost:8081/api/checkout?${sendData}`, {headers: {Authorization: localStorage.getItem("token")}})
            .then((res) => {
                setGifticons(res.data.list);
                setOriginalPrice(res.data.originalPrice);
                setPrice(res.data.price);
            });
    }

    const trashHandleClick = (event) => {
        let gifticonIds = searchParams.getAll("gifticonIds");

        let filter = gifticonIds.filter((gifticonId) => {
            return gifticonId !== event.target.id.replace("trash-", "");
        });

        setSearchParams({gifticonIds: filter});
    }

    useEffect(() => {
        let gifticons = searchParams.getAll("gifticonIds");

        fetchGifticon(gifticons);
    }, []);

    useEffect(() => {
        let gifticons = searchParams.getAll("gifticonIds");

        fetchGifticon(gifticons);
    }, [searchParams]);

    const handlePointClick = (event) => {
        const gifticonIds = searchParams.getAll("gifticonIds");

        const sendData = {gifticonIds: [], point: parseInt(pointSelectRef.current.innerText)};

        gifticonIds.forEach(gifticonId => {
            sendData.gifticonIds.push(gifticonId);
        })

        axios.post("http://localhost:8081/api/points/buy", sendData, {headers: {Authorization: localStorage.getItem("token")}})
            .then(navigate("/"));
    };

    return (<div className="app-content">
        <div className="u-s-p-y-60">
            <CheckoutSection originalPrice={originalPrice} totalPrice={price} gifticons={gifticons}
                             trashHandleClick={trashHandleClick} handlePointClick={handlePointClick}
                             pointSelectRef={pointSelectRef}/>
        </div>
    </div>)
};