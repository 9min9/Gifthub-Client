import NewsletterModalHead from "./NewsletterModalHead";
import NewsletterModalTitleWrapper from "./NewsletterModalTitleWrapper";
import NewsletterModalSubSubTitleWrapper from "./NewsletterModalSubSubTitleWrapper";
import GifticonAddForm from "../../gifticion/GifticonAddForm";

export default function NewsletterInfoSection({item}) {


    console.log(item)

    if (item.flagInDb === true && item.state === "WAIT_REGISTRATION") {
        return (
            <div className="col-lg-6 new-l__col-2">
                <div className="new-l__section u-s-m-t-30">
                    <NewsletterModalHead>
                        <NewsletterModalTitleWrapper innerText={"기프티콘 등록하기"}/>
                        <NewsletterModalSubSubTitleWrapper innerText={"기프티콘 정보를 확인해주세요"}/>
                    </NewsletterModalHead>

                    <GifticonAddForm item={item}/>
                </div>
            </div>
        );
    }



    if (item.status === "NEED_APPROVAL" && item.flagInDb === false) {
        return (
            <div className="col-lg-6 new-l__col-2">
                <div className="new-l__section u-s-m-t-30">
                    <NewsletterModalHead>
                        <NewsletterModalTitleWrapper innerText={"기프티콘 검수 요청하기"}/>
                        <NewsletterModalSubSubTitleWrapper errorText={"확인되지 않는 정보가 존재합니다. 검수 요청이 필요합니다"}/>
                    </NewsletterModalHead>

                    <GifticonAddForm item={item}/>
                </div>
            </div>
        );
    }

    if (item.flagInDb === false) {
        return (
            <div className="col-lg-6 new-l__col-2">
                <div className="new-l__section u-s-m-t-30">
                    <NewsletterModalHead>
                        <NewsletterModalTitleWrapper innerText={"기프티콘 검수 요청하기"}/>
                        <NewsletterModalSubSubTitleWrapper errorText={"등록되지 않은 상품입니다. 검수 요청이 필요합니다"}/>
                    </NewsletterModalHead>

                    <GifticonAddForm item={item}/>
                </div>
            </div>
        );
    }

    if (item.status === "FAIL_REGISTRATION") {
        return (
            <div className="col-lg-6 new-l__col-2">
                <div className="new-l__section u-s-m-t-30">
                    <NewsletterModalHead>
                        <NewsletterModalTitleWrapper innerText={"기프티콘 검수 요청하기"}/>
                        <NewsletterModalSubSubTitleWrapper errorText={"검수 요청이 거절 당했습니다"}/>
                    </NewsletterModalHead>

                    <GifticonAddForm item={item}/>
                </div>
            </div>
        );

    }




    // return (
    //     <div className="col-lg-6 new-l__col-2">
    //         <div className="new-l__section u-s-m-t-30">
    //             <NewsletterModalHead>
    //                 <NewsletterModalTitleWrapper innerText={"기프티콘 등록하기"}/>
    //                 <NewsletterModalSubSubTitleWrapper innerText={"기프티콘 정보를 확인해주세요"}/>
    //             </NewsletterModalHead>
    //
    //             <GifticonAddForm item={item}/>
    //         </div>
    //     </div>
    // );
}