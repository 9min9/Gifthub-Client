import GifticonIntroContainer from "./GifticonIntroContainer";
import GifticonItemContainer from "./GifticonItemContainer";
import RouteBox from "../ui/link/RouteBox";
import GiftiBotContainer from "./GiftiBotContainer";

export default function GifticonItemSection({itemList}) {

    const giftiBot = {imageUrl: "/images/giftibot.jpeg", intro: "기프티콘을 추가해주세요"};

    return (
        <div className="u-s-p-y-60">
            <div className="section__intro u-s-m-b-60">
                <GifticonIntroContainer title="기프티콘 등록" content="등록 할 기프티콘을 올려주세요"/>
            </div>

            <div className="section__content">
                <div className="container">
                    <div className="row">
                        <div id="gifticon-list-div" className="col-lg-12 col-md-12 col-sm-12">
                            <GiftiBotContainer item={giftiBot}/>

                            {/*FIXME : item.gifticonStorageId가 아닌 그냥 id를 받아야함 또한 전체적으로 동일한 name이 세팅되어야 함*/}
                            {itemList.map((item) => (
                                <div key={item.gifticonStorageId}>
                                    <GifticonItemContainer item={item}/>
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-12">
                            <RouteBox/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}