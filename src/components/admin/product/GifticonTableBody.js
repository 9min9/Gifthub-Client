import DashTextButton from "../../ui/button/DashTextButton";
import useNewsletterModal from "../../../hooks/useNewsletterModal";
import NewsletterModal from "../../modal/newsletter/NewsletterModal";

export default function GifticonTableBody({item}) {

    const { isOpen, openModal, closeModal} = useNewsletterModal();


    return (
        <>
            <tr>
                <th>{item.productName}</th>
                <th>{item.brandName}</th>
                <th>{item.userName}</th>
                <th>{item.modifiedDate}</th>
                <th><DashTextButton innerText={"확인"} _onClick={() => openModal()}></DashTextButton></th>
            </tr>

            <NewsletterModal item={item} isOpen={isOpen} closeModal={closeModal}/>
        </>

    );
}