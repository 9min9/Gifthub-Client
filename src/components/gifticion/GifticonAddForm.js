import NewsletterInputWrapper from "../modal/newsletter/NewsletterInputWrapper";
import axios from "axios";
import useGifticonAddFormInput from "../../hooks/useGifticonAddFormInput";
import NewsletterFormErrorWrapper from "../modal/newsletter/NewsletterFormErrorWrapper";
import NewsletterFormButton from "../modal/newsletter/NewsletterFormButton";
import {useNavigate} from "react-router-dom";

export default function GifticonAddForm({item, buttonText}) {
    console.log("GifticonAddForm")
    console.log(item);
    let navigate = useNavigate();

    const input = useGifticonAddFormInput({
        productName: item.productName || '',
        brandName: item.brand || '',
        due: item.due || '',
        barcode: item.barcode || '',
        price: '',
    });

    const handleGifticonAddModalClick = () => {
        const formData = new FormData();

        for (const [key, value] of Object.entries(input.values)) {
            formData.append(key, value);
        }

        formData.append('storageId', item.gifticonStorageId);

        if (item.flagInDb === true) {
            gifticonAdd(formData);
        }

        if (item.flagInDb === false) {
            sendToAdmin(formData);
        }

        if(item.flagInDb === false && item.status === "NEED_APPROVAL") {
            sendToAdmin(formData);
        }

        if (item.status === "FAIL_REGISTRATION") {
            sendToAdmin(formData);
        }
    }

    const gifticonAdd = (formData) => {
        axios
            .post(
                `${process.env.REACT_APP_API_ROOT}/api/gifticon/register`,
                formData,
                {
                    headers: {'Content-Type': 'application/json', Authorization: localStorage.getItem('token')},
                })
            .then(function (response) {
                console.log(response);
            })
    }

    const sendToAdmin = (formData) => {
        axios
            .post(
                `${process.env.REACT_APP_API_ROOT}/api/gifticon/register/check`,
                formData,
                {
                    headers: {'Content-Type': 'application/json', Authorization: localStorage.getItem('token')},
                })
            .then(function (response) {
                alert("등록 검수가 신청되었습니다");
                navigate("/gifitcon/add");
            })


    }

    return (
        <form id="gifticon-add-form" className="new-l__form">
            <NewsletterInputWrapper labelText={"상품 이름"}
                                    inputClassName={"news-l__input"}
                                    name={"productName"}
                                    value={item.productName}
                                    type={"text"}
                                    placeholder={"상품 이름을 입력해주세요"}
                                    _onChange={(e) => input.onChange('productName', e.target.value)}
            />

            <NewsletterFormErrorWrapper field={"productName"} innerText={""}></NewsletterFormErrorWrapper>

            <NewsletterInputWrapper labelText={"브랜드 이름"}
                                    inputClassName={"news-l__input"}
                                    name={"brandName"}
                                    value={item.brand}
                                    type={"text"}
                                    placeholder={"브랜드 이름을 입력해주세요"}
                                    _onChange={(e) => input.onChange('brand', e.target.value)}
            />

            <NewsletterFormErrorWrapper field={"brandName"} innerText={""}></NewsletterFormErrorWrapper>

            <NewsletterInputWrapper labelText={"유효 기간"}
                                    inputClassName={"news-l__input"}
                                    name={"due"}
                                    value={item.due}
                                    type={"date"}
            />

            <NewsletterFormErrorWrapper field={"due"} innerText={""}></NewsletterFormErrorWrapper>

            <NewsletterInputWrapper labelText={"바코드 번호"}
                                    inputClassName={"news-l__input"}
                                    name={"barcode"}
                                    value={item.barcode}
                                    type={"number"}
                                    placeholder={"바코드 값을 입력해주세요"}
                                    _onChange={(e) => input.onChange(`barcode`, e.target.value)}
            />

            <NewsletterFormErrorWrapper field={"barcode"} innerText={""}></NewsletterFormErrorWrapper>

            <NewsletterInputWrapper labelText={"구매 가격"}
                                    inputClassName={"news-l__input"}
                                    name={"price"}
                                    value={item.price}
                                    type={"number"}
                                    placeholder={item.price}
                                    _onChange={(e) => input.onChange(`price`, e.target.value)}
            />

            <NewsletterFormErrorWrapper field={"price"} innerText={""}></NewsletterFormErrorWrapper>

            <NewsletterFormButton innerText={buttonText} _onClick={handleGifticonAddModalClick}></NewsletterFormButton>
        </form>
    );

}