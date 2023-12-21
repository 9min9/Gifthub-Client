import ReactModal from "react-modal";
import styled from "styled-components";
import NewsletterInfoSection from "./NewsletterInfoSection";
import NewsletterModalImageSection from "./NewsletterModalImageSection";

export default function NewsletterModal({isOpen, setIsOpen}) {
    const StyledModal = styled(ReactModal)`
      &.ReactModal__Content {
        width: 100%;
        max-width: 800px;
        height: 100%;
        max-height: 800px;
        margin: auto;
        display: flex;
        flex-direction: column;
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
        <StyledModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={modalStyle}>

            {/*<div id="newsletter-modal" className="modal fade new-l">*/}
            {/*<div id="newsletter-modal" className="modal-dialog modal-dialog-centered">*/}
            <div className="modal-content modal--shadow">
                <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal"></button>
                <div className="modal-body">
                    <div className="row u-s-m-x-0">
                        {/*image section*/}
                        <NewsletterModalImageSection></NewsletterModalImageSection>

                        {/*info section*/}
                        <NewsletterInfoSection></NewsletterInfoSection>

                    </div>
                </div>
            </div>
            {/*</div>*/}
            {/*</div>*/}
        </StyledModal>
    );
}