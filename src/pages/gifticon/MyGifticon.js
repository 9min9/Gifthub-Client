import GifticonIntroContainer from "../../components/gifticion/GifticonIntroContainer";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../components/account/AuthContextProvider";
import axios from "axios";
import GifticonItemContainer from "../../components/gifticion/GifticonItemContainer";

export default function MyGifticon () {
    const [gifticonList, setGifticonList] = useState([]);

    const auth = useContext(AuthContext);

    useEffect(() => {
        getMyGifticons();
    }, []);

    useEffect(() => {
        console.log(gifticonList);
    }, [gifticonList]);

    const getMyGifticons = async () =>{
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/gifticons`,
            {headers : {Authorization : localStorage.getItem('token')}})
            .then(function (res){
                console.log(res.data.content)
                setGifticonList(res.data.content);
            })
    }

    return (
        <div className="app-content">

            <div className="u-s-p-y-60">
                {/*// <!--====== Section Intro ======-->*/}
                <div className="section__intro u-s-m-b-60">
                    <GifticonIntroContainer title="나의 기프티콘" content="사용 할 기프티콘을 선택해주세요"/>
                </div>
                {/*// <!--====== End - Section Intro ======-->*/}

                {/*// <!--====== Section Content ======-->*/}
                <div className="section__content">
                    <div className="container">
                        <div className="row">
                            <div id="gifticon-list-div" className="col-lg-12 col-md-12 col-sm-12">
                                {gifticonList.map((item) => (
                                    <div key={item.id}>
                                        <GifticonItemContainer item={item}/>
                                    </div>
                                ))}
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