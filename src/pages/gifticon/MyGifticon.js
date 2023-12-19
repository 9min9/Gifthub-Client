import GifticonIntroContainer from "../../components/gifticion/GifticonIntroContainer";
import GifticonItemSection from "../../components/gifticion/GifticonItemSection";

export default function MyGifticon () {

    return (
        <div className="app-content">
            <GifticonItemSection></GifticonItemSection>

            <div className="u-s-p-y-60">
                {/*// <!--====== Section Intro ======-->*/}
                <div className="section__intro u-s-m-b-60">
                    <GifticonIntroContainer title="나의 기프티콘" content="사용 할 기프티콘을 선택해주세요"></GifticonIntroContainer>
                </div>
                {/*// <!--====== End - Section Intro ======-->*/}

                {/*// <!--====== Section Content ======-->*/}
                <div className="section__content">
                    <div className="container">
                        <div className="row">
                            <div id="gifticon-list-div" className="col-lg-12 col-md-12 col-sm-12">
                            </div>
                            <ul className="shop-p__pagination" id="pagination-place">
                            </ul>
                        </div>
                    </div>
                </div>
                {/*// <!--====== End - Section Content ======-->*/}
            </div>
            {/*// <!--====== End - Section 2 ======-->*/}
        </div>
    )

}