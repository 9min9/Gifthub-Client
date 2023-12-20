import ReactModal from 'react-modal';

export default function GifticonAddModal({isOpen}) {
    console.log("GifticonAddModal is rendered");

    const openChat = () => {

    };

    const openFile = (e) => {

    };

    const modalStyle = {
        content: {
            width: '500px',
            height: '266px',
            margin: 'auto', // 가운데정렬
        }
    }


    return (
        <ReactModal isOpen={isOpen}
                    style={modalStyle}
        >
            {/*<div className="modal fade" id="add-to-cart">*/}
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal-radius modal-shadow">

                        <button
                            className="btn dismiss-button fas fa-times"
                            type="button"
                            data-dismiss="modal"></button>

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
                                <a id="open-chat-button"
                                   className="s-option__link btn--e-white-brand-shadow"
                                   onClick="openChat()" data-dismiss="modal">카카오톡으로 추가하기</a>

                                <label className="s-option__link btn--e-white-brand-shadow"
                                       htmlFor="fileInput">
                                    파일로 추가하기
                                </label>

                                <input type="file" id="fileInput" style={{display: `none`}}
                                       onChange="openFile(this)"/>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

                    </div>
                </div>
            {/*</div>*/}
        </ReactModal>
    );
}