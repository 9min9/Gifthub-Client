import ReactModal from "react-modal";
import styled from "styled-components";
import NewsletterInfoSection from "./NewsletterInfoSection";
import NewsletterModalImageSection from "./NewsletterModalImageSection";
import {useEffect} from "react";


function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'visible';
}

export default function NewsletterModal({item, isOpen, closeModal}) {
    // const {isOpen, openModal, closeModal} = useNewsletterModal();

    useEffect(() => {
        if (isOpen) {
            disableScroll();
        } else {
            enableScroll();
        }
        // isOpen(true);
    }, [isOpen]);

    const StyledModal = styled(ReactModal)`
      &.ReactModal__Content {
        width: 100%;
        max-width: 800px;
        height: 100%;
        max-height: 800px;
        margin: auto;
        //display: flex;
        //flex-direction: column;
        justify-content: center;
      }

      .modal-body {
        padding: 0;
      }

      .row {
        align-items: center;
      }
    `;

    const modalStyle = {
        overlay: {background: "rgba(0, 0, 0, 0.75)"}
    }

    return (
        <StyledModal isOpen={isOpen} onRequestClose={closeModal} style={modalStyle}>
                <div className="modal-content modal--shadow">
                    <button className="btn dismiss-button fas fa-times" type="button" onClick={closeModal}/>
                    <div className="modal-body">
                        <div className="row u-s-m-x-0">
                            {/*image section*/}
                            <NewsletterModalImageSection item={item}/>

                            {/*info section*/}
                            <NewsletterInfoSection item={item}/>
                        </div>
                    </div>
                </div>
        </StyledModal>
    );
}