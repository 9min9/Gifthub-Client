import Label from "../ui/form/Label";
import NewsletterInputWrapper from "../modal/newsletter/NewsletterInputWrapper";
import axios from "axios";
import useGifticonAddFormInput from "../../hooks/useGifticonAddFormInput";

export default function GifticonAddForm(props) {
    const {item} = props;

    const input = useGifticonAddFormInput({
        productName : item.productName || '',
        brandName : item.brand || '',
        due : item.due || '',
        barcode : item.barcode || '',
        price : '',
    });

    console.log("item:"+item);
    console.log("item.storageId: " +item.gifticonStorageId);

    const handleGifticonAddModalClick = async () => {
        try {
            const formData = new FormData();

            for (const [key, value] of Object.entries(input.values)){
                formData.append(key, value);
            }
            formData.append('storageId', item.gifticonStorageId);

            const response = await axios.post(`${process.env.REACT_APP_API_ROOT}/api/gifticon/register`,
                formData,
                {
                    headers: {
                        'Content-Type' : 'application/json',
                        Authorization : localStorage.getItem('token')
                    },
                }).then( function (response){
                    console.log("response : " + response);
                    console.log("response.data : "+ response.data);
            })
        } catch (error){
            console.log(error);
        }
    }

    return(
        <form id="gifticon-add-form" className="new-l__form">

            <NewsletterInputWrapper
                labelText={"상품 이름"}
                inputClassName={"news-l__input"}
                name={"productName"} type={"text"}
                                    // placeholder={"상품 이름을 입력해주세요"}
                placeholder={item.productName}
                _onChange={(e) => input.onChange('productName', e.target.value)}
            />

            <div id="error-product-div" className="u-s-m-b-10">
                <Label labelText={""}></Label>
                <label id="error-product-modal-label" className="gl-label"></label>
            </div>
            <NewsletterInputWrapper
                labelText={"브랜드 이름"}
                inputClassName={"news-l__input"}
                name={"brandName"}
                type={"text"}
                placeholder={item.brand}
                _onChange={(e) => input.onChange('brand', e.target.value)}
            />

            <div id="error-brand-div" className="u-s-m-b-10">
                <label id="error-brand-modal-label" className="gl-label"></label>
            </div>

            <NewsletterInputWrapper labelText={"유효 기간"} inputClassName={"news-l__input"} name={"due"} type={"date"}
                                    placeholder={item.due ? item.due : ""}
            />

            <div id="error-due-div" className="u-s-m-b-10">
                <label id="error-due-modal-label" className="gl-label"></label>
            </div>

            <NewsletterInputWrapper
                labelText={"바코드 번호"}
                inputClassName={"news-l__input"}
                name={"barcode"}
                type={"number"}
                placeholder={item.barcode}
                _onChange={(e) => input.onChange(`barcode`, e.target.value)}
            />

            <div id="error-barcode-div" className="u-s-m-b-10">
                <label id="error-barcode-modal-label" className="gl-label"></label>
            </div>

            <NewsletterInputWrapper
                labelText={"구매 가격"}
                inputClassName={"news-l__input"}
                name={"price"}
                type={"number"}
                placeholder={item.price}
                _onChange={(e) => input.onChange(`price`, e.target.value)}
            />

            <div id="error-price-div" className="u-s-m-b-10">
                <label id="error-price-modal-label" className="gl-label"></label>
            </div>

            <div className="u-s-m-y-15">
                <a id="gifticon-add-modal-btn" className="btn btn--e-brand-b-2" onClick={handleGifticonAddModalClick}>등록</a>
            </div>
        </form>
    );

}