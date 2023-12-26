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
    const [selectCategory, setSelectCategory] = useState("");
    const [FailureReason, setFailureReason] = useState([]);
    const [error, setError] = useState([]);
    const input = useGifticonAddFormInput({
        productName: item.productName || '',
        brandName: item.brand || '',
        due: item.due || '',
        barcode: item.barcode || '',
        price: item.price || '',
    });

    useEffect(() => {
        if (item.isAdmin === true) {
            getCategory()
        }
    }, []);

    /** admin */
    const getCategory = () => {
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/product/get/category`, null, {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (response) {
                setCategory(response.data);
            })
    }

    //todo getCancelReason
    const handleCategoryChange = (selectedCategory) => {
        setSelectCategory(selectedCategory);
    };


    const handleGifticonAddModalClick = () => {
        const formData = new FormData();

        for (const [key, value] of Object.entries(input.values)) {
            formData.append(key, value);
        }

        formData.append('storageId', item.gifticonStorageId ? item.gifticonStorageId : item.id);
        formData.append('isConfirm', isConfirm);
        formData.append("category", selectCategory);

        if(item.isAdmin === true) {
            gifticonAddByAdmin(formData);
        }

        if (item.flagInDb === true) {
            gifticonAdd(formData);
        }

        if (item.flagInDb === false) {
            storageToAdmin(formData);
        }

        if (item.flagInDb === false && item.status === "NEED_APPROVAL") {
            storageToAdmin(formData);
        }

        if (item.status === "FAIL_REGISTRATION") {
            storageToAdmin(formData);
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
                alert("기프티콘 등록 완료")
                navigate("/gifticon/add/refresh");
            })
            .catch(function (error) {
                let errorList = error.response.data;
                for (const err of errorList) {
                    alert(err.message);
                }
            })
    }

    //기프티콘을 관리자 검수로 이동
    const storageToAdmin = (formData) => {
        axios
            .post(
                `${process.env.REACT_APP_SERVER_URL}/api/gifticon/register/check`,
                formData,
                {
                    headers: {'Content-Type': 'application/json', Authorization: localStorage.getItem('token')},
                })
            .then(function (response) {
                alert("등록 검수가 신청되었습니다");
                navigate("/gifticon/add/refresh");
            })
    }

    // 관리자 검수 후 기프티콘 등록
    const gifticonAddByAdmin = (formData) => {
        axios
            .post(
                `${process.env.REACT_APP_SERVER_URL}/api/admin/gifticon/confirm/register`,
                formData,
                {headers: {'Content-Type': 'application/json', Authorization: localStorage.getItem('token')}})
            .then(function (response) {
                alert("검수가 완료되었습니다.")
                navigate("/admin/product/config/refresh");
            })
            .catch(function (error) {
                alert("검수에 실패했습니다")
                console.log(error);
            })
    }

    let screen;

    if(item.isAdmin === true) {
        screen = renderAdminAddForm();
    } else {
        screen = renderCommonAddForm();
    }

    const renderAdminAddForm = () => {
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
                                        placeholder={"가격을 입력해주세요"}
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
                        <ConfirmResultSelector title={"카테고리"} item={category} handleCategoryChange={handleCategoryChange}></ConfirmResultSelector>
                        :
                        <ConfirmResultSelector title={"거절사유"} item={""}></ConfirmResultSelector>
                    }
                </div>

                <NewsletterFormButton innerText={buttonText} _onClick={handleGifticonAddModalClick}></NewsletterFormButton>
            </form>
        );
    }

    const renderCommonAddForm = () => {
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

    return (screen);
}