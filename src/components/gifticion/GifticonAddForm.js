import NewsletterInputWrapper from "../modal/newsletter/NewsletterInputWrapper";
import axios from "axios";
import useGifticonAddFormInput from "../../hooks/useGifticonAddFormInput";
import NewsletterFormErrorWrapper from "../modal/newsletter/NewsletterFormErrorWrapper";
import NewsletterFormButton from "../modal/newsletter/NewsletterFormButton";
import {useNavigate} from "react-router-dom";
import Label from "../ui/form/Label";
import IsConfrimRadioWrapper from "../admin/product/IsConfrimRadioWrapper";
import ConfirmResultSelector from "../admin/product/ConfirmResultSelector";
import {useEffect, useState} from "react";

export default function GifticonAddForm({item, buttonText}) {
    let navigate = useNavigate();
    const [isConfirm, setIsConfirm] = useState(true);

    //todo : 카테고리 , 거절 이유 세팅하기
    const [category, setCategory] = useState([]);
    const [FailureReason, setFailureReason] = useState([]);

    useEffect(() => {
        getCategory()

    }, []);

    const getCategory = () => {
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/product/get/category`, null, {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (response) {
                console.log(response);
                setCategory(response.data);
            })
    }


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

        if (item.flagInDb === false && item.status === "NEED_APPROVAL") {
            sendToAdmin(formData);
        }

        if (item.status === "FAIL_REGISTRATION") {
            sendToAdmin(formData);
        }
    }

    const gifticonAdd = (formData) => {
        axios
            .post(
                `${process.env.REACT_APP_SERVER_URL}/api/gifticon/register`,
                formData,
                {
                    headers: {'Content-Type': 'application/json', Authorization: localStorage.getItem('token')},
                })
            .then(function (response) {
                console.log(response);
                alert(`등록 실패\n\n${response.data.message}`);

            })
    }

    const sendToAdmin = (formData) => {
        axios
            .post(
                `${process.env.REACT_APP_SERVER_URL}/api/gifticon/register/check`,
                formData,
                {
                    headers: {'Content-Type': 'application/json', Authorization: localStorage.getItem('token')},
                })
            .then(function (response) {
                alert("등록 검수가 신청되었습니다");
                navigate("/gifitcon/add");
            })


    }

    if (item.isAdmin === true) {
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
                                        value={input.values.due}
                                        type={"date"}
                                        _onChange={(e) => input.onChange('due', e.target.value)}

                />

                <NewsletterFormErrorWrapper field={"due"} innerText={""}></NewsletterFormErrorWrapper>

                <NewsletterInputWrapper labelText={"바코드 번호"}
                                        inputClassName={"news-l__input"}
                                        name={"barcode"}
                                        value={input.values.barcode}
                                        type={"number"}
                                        placeholder={"바코드 값을 입력해주세요"}
                                        _onChange={(e) => input.onChange(`barcode`, e.target.value)}
                />

                <NewsletterFormErrorWrapper field={"barcode"} innerText={""}></NewsletterFormErrorWrapper>

                <NewsletterInputWrapper labelText={"구매 가격"}
                                        inputClassName={"news-l__input"}
                                        name={"price"}
                                        value={input.values.price}
                                        type={"number"}
                                        placeholder={item.price}
                                        _onChange={(e) => input.onChange(`price`, e.target.value)}
                />

                <NewsletterFormErrorWrapper field={"price"} innerText={""}></NewsletterFormErrorWrapper>

                <div className="u-s-m-b-5">
                    <Label labelText={"등록 여부"}></Label>
                </div>

                <IsConfrimRadioWrapper value={true}  _onChange={() => setIsConfirm(true)}></IsConfrimRadioWrapper>
                <IsConfrimRadioWrapper value={false} _onChange={() => setIsConfirm(false)}></IsConfrimRadioWrapper>

                <div className="gl-inline u-s-m-y-15">
                    {isConfirm === true ?
                        <ConfirmResultSelector title={"카테고리"} item={category}></ConfirmResultSelector>
                        :
                        <ConfirmResultSelector title={"거절사유"} item={""}></ConfirmResultSelector>
                    }
                </div>

                <NewsletterFormButton innerText={buttonText} _onClick={handleGifticonAddModalClick}></NewsletterFormButton>
            </form>
        );
    }


    return (
        <form id="gifticon-add-form" className="new-l__form">
            <NewsletterInputWrapper labelText={"상품 이름"}
                                    inputClassName={"news-l__input"}
                                    name={"productName"}
                                    value={input.values.productName}
                                    type={"text"}
                                    placeholder={"상품 이름을 입력해주세요"}
                                    _onChange={(e) => input.onChange('productName', e.target.value)}
            />

            <NewsletterFormErrorWrapper field={"productName"} innerText={""}></NewsletterFormErrorWrapper>

            <NewsletterInputWrapper labelText={"브랜드 이름"}
                                    inputClassName={"news-l__input"}
                                    name={"brandName"}
                                    value={input.values.brandName}
                                    type={"text"}
                                    placeholder={"브랜드 이름을 입력해주세요"}
                                    _onChange={(e) => input.onChange('brand', e.target.value)}
            />

            <NewsletterFormErrorWrapper field={"brandName"} innerText={""}></NewsletterFormErrorWrapper>

            <NewsletterInputWrapper labelText={"유효 기간"}
                                    inputClassName={"news-l__input"}
                                    name={"due"}
                                    value={input.values.due}
                                    type={"date"}
                                    _onChange={(e) => input.onChange('due', e.target.value)}
            />

            <NewsletterFormErrorWrapper field={"due"} innerText={""}></NewsletterFormErrorWrapper>

            <NewsletterInputWrapper labelText={"바코드 번호"}
                                    inputClassName={"news-l__input"}
                                    name={"barcode"}
                                    value={input.values.barcode}
                                    type={"number"}
                                    placeholder={"바코드 값을 입력해주세요"}
                                    _onChange={(e) => input.onChange(`barcode`, e.target.value)}
            />

            <NewsletterFormErrorWrapper field={"barcode"} innerText={""}></NewsletterFormErrorWrapper>

            <NewsletterInputWrapper labelText={"구매 가격"}
                                    inputClassName={"news-l__input"}
                                    name={"price"}
                                    value={input.values.price}
                                    type={"number"}
                                    placeholder={item.price}
                                    _onChange={(e) => input.onChange(`price`, e.target.value)}
            />

            <NewsletterFormErrorWrapper field={"price"} innerText={""}></NewsletterFormErrorWrapper>

            <NewsletterFormButton innerText={buttonText} _onClick={handleGifticonAddModalClick}></NewsletterFormButton>
        </form>
    );


}