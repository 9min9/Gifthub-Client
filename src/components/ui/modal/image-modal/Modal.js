import ReactModal from "react-modal";
import styled from "styled-components";

export default function Modal({
                                  isOpen,
                                  handleCloseModalClick,
                                  children,
                              }) {
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
            z-index: 10000;
        }

        .modal-body {
            padding: 0;
        }

        .row {
            align-items: center;
        }
    `;

    const modalStyle = {
        overlay: {
            background: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000000,
        }
    }

    return (
        <StyledModal isOpen={isOpen} onRequestClose={handleCloseModalClick} style={modalStyle}>
            <div className="modal-content modal--shadow">
                <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal"
                        onClick={handleCloseModalClick}></button>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </StyledModal>
    );
};