import ReactModal from 'react-modal';
import {useEffect} from "react";
import styled from "styled-components";

export default function GifticonAddModal({isOpen, setIsOpen}) {
    console.log("GifticonAddModal is rendered");
    console.log("jsKey : "+process.env.REACT_APP_KAKAO_JS_KEY);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script)
        }
    }, []);

    const openChat = () => {
        // chatChannel();
        if (window.Kakao) {
            const kakao = window.Kakao

            if (!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_JS_KEY)
                // <!--    <script>function chatChannel(){Kakao.Channel.chat({ channelPublicId: '_ATxoKG',});}</script>-->
            }

            kakao.Channel.addChannel({
                channelPublicId: '_ATxoKG',
            })
        }
    };

    const openFile = (e) => {

    };


    const StyledModal = styled(ReactModal)`
      &.ReactModal__Content {
        width: 100%;
        max-width: 800px;
        height: 100%;
        margin: auto;
      }

      .modal-dialog {
        width: 100%;
        max-width: 550px;
      }

      .row {
        -ms-flex-align: center;
        align-items: center;
      }
    `;

    const modalStyle = {
        overlay: {background: "rgba(0, 0, 0, 0.75)"}
    }

    return (
        <StyledModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={modalStyle}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal-radius modal-shadow">
                    <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal"></button>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="success u-s-m-b-30">
                                    <div className="success__text-wrap"><i className="fas fa-check"></i>
                                        <span>기프티콘 올리기</span>
                                    </div>
                                    <div className="success__img-wrap">

                                        <img className="u-img-fluid" src="/images/giftibot.jpeg" alt=""/>
                                    </div>
                                    <div className="success__info-wrap">
                                        <span className="success__price">최대 10장까지 올릴 수 있습니다~</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="s-option">
                                    <span className="s-option__text">추가 방법을 선택해주세요</span>
                                    <div className="s-option__link-box">
                                        <a id="open-chat-button" className="s-option__link btn--e-white-brand-shadow"
                                           onClick={openChat} data-dismiss="modal">카카오톡으로 추가하기</a>
                                        <label className="s-option__link btn--e-white-brand-shadow" htmlFor="fileInput">파일로
                                            추가하기</label>
                                        <input type="file" id="fileInput" style={{display: `none`}}
                                               onChange="openFile(this)"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledModal>
    );
}