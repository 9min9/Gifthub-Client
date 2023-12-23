import NewsletterModalHead from "./NewsletterModalHead";
import NewsletterModalTitleWrapper from "./NewsletterModalTitleWrapper";
import NewsletterModalSubSubTitleWrapper from "./NewsletterModalSubSubTitleWrapper";
import GifticonAddForm from "../../gifticion/GifticonAddForm";

export default function NewsletterInfoSection({item}) {
    let buttonText;
    let screen;

    const renderAdminScreen = () => {
        buttonText = "검수 확인";
        return (
            <div className="col-lg-6 new-l__col-2">
                <div className="new-l__section u-s-m-t-30">
                    <NewsletterModalHead>
                        <NewsletterModalTitleWrapper innerText={"기프티콘 검수 확인하기"}/>
                    </NewsletterModalHead>

                    <GifticonAddForm item={item} buttonText={buttonText}/>
                </div>
            </div>
        );
    }

    const renderRegistrationScreen = () => {
        buttonText="등록"
        return (
            <div className="col-lg-6 new-l__col-2">
                <div className="new-l__section u-s-m-t-30">
                    <NewsletterModalHead>
                        <NewsletterModalTitleWrapper innerText={"기프티콘 등록하기"}/>
                        <NewsletterModalSubSubTitleWrapper innerText={"기프티콘 정보를 확인해주세요"}/>
                    </NewsletterModalHead>

                    <GifticonAddForm item={item} buttonText={buttonText}/>
                </div>
            </div>
        );
    }

    const renderApprovalScreen = () => {
        buttonText = "등록 검수";
        return (
            <div className="col-lg-6 new-l__col-2">
                <div className="new-l__section u-s-m-t-30">
                    <NewsletterModalHead>
                        <NewsletterModalTitleWrapper innerText={"기프티콘 검수 요청하기"}/>
                        <NewsletterModalSubSubTitleWrapper errorText={"등록되지 않은 상품입니다. 검수 요청이 필요합니다"}/>
                    </NewsletterModalHead>

                    <GifticonAddForm item={item} buttonText={buttonText}/>
                </div>
            </div>
        );
    }

    const renderFailRegistrationScreen = () => {
        buttonText = "등록 검수";
        return (
            <div className="col-lg-6 new-l__col-2">
                <div className="new-l__section u-s-m-t-30">
                    <NewsletterModalHead>
                        <NewsletterModalTitleWrapper innerText={"기프티콘 검수 요청하기"}/>
                        <NewsletterModalSubSubTitleWrapper errorText={"등록 검수가 취소되었습니다"} errorDetail={"정보를 다시 확인 해주세요"}/>
                    </NewsletterModalHead>

                    <GifticonAddForm item={item} buttonText={buttonText}/>
                </div>
            </div>
        );
    }

    if(item.isAdmin === true) {
        screen = renderAdminScreen();
    } else if(item.flagInDb === true && item.status === "WAIT_REGISTRATION") {
        screen =renderRegistrationScreen();
    } else if (item.status === "NEED_APPROVAL"){
        screen = renderApprovalScreen();
    } else if (item.status === "FAIL_REGISTRATION") {
        screen = renderFailRegistrationScreen();
    }

    return(screen);
}