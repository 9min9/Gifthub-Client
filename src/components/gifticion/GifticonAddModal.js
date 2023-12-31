import ReactModal from 'react-modal';
import {useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import React from "react";
import {useNavigate} from "react-router-dom";

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'visible';
}

export default function GifticonAddModal({isOpen, setIsOpen}) {
    const fileAdd = React.useRef(null);
    let navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [isOpen]);

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
        contextInit();

        // chatChannel();
        if (window.Kakao) {
            const kakao = window.Kakao

            if (!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_JS_KEY)
            }

            kakao.Channel.chat({
                // channelPublicId: '_yEhsG'
                channelPublicId: '_ATxoKG'
            });
        }
    };

    function contextInit() {
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/jwt/context/init`, null, {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (response) {
                console.log(response);
            })
    }

    const handleFileAddButtonClick = async () => {
        try {
            fileAdd.current.click();
            const imageFile = fileAdd.current.files[0];

            if (!imageFile) {
                console.error("no file selected");
                // return;
            }

            const formData = new FormData();
            formData.append('imageFile', imageFile);

            const res = await axios
                .post(
                    `${process.env.REACT_APP_SERVER_URL}/api/storage/file/add`,
                    formData,
                    { headers: {'Content-Type': 'multipart/form-data', Authorization: localStorage.getItem('token')},}
                );

            alert("등록 성공");
            setIsOpen(false);
            navigate("/gifticon/add/refresh");

        } catch (error) {
            console.log("error: " + error);
            alert(`등록 실패\n\n${error.response.data.message}`);
        }
    };

    const handleFileChange = e => {
        handleFileAddButtonClick();
    }


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

    let imageUrl = `${process.env.REACT_APP_SERVER_HOME_URL}/images/giftibot.jpeg`

    return (
        <StyledModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={modalStyle}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal-radius modal-shadow">
                    <button className="btn dismiss-button fas fa-times" type="button"
                            onClick={() => setIsOpen(false)}></button>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="success u-s-m-b-30">
                                    <div className="success__text-wrap"><i className="fas fa-check"></i>
                                        <span>기프티콘 올리기</span>
                                    </div>
                                    <div className="success__img-wrap">
                                        <img className="u-img-fluid" src={imageUrl} alt=""/>
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
                                        <React.Fragment>
                                            <label className="s-option__link btn--e-white-brand-shadow" htmlFor="fileInput">파일로 추가하기</label>
                                            <input type="file"
                                                   id="fileInput"
                                                   style={{display: `none`}}
                                                   ref={fileAdd}
                                                   onChange={handleFileChange}
                                            />
                                        </React.Fragment>
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