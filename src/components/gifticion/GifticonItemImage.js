export default function GifticonItemImage(props) {
    const {id, url} = props;

    return (
        <div id="gifticon-image" className="w-r__img-wrap">
            <img className="w-r__img-wrap u-img-fluid" src={url} alt=""/>
        </div>
    )
}