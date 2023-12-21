import {useState} from "react";

function useNewsletterModal (){
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return { isOpen, openModal, closeModal};
}

export default useNewsletterModal;