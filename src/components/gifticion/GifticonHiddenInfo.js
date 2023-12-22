export default function GifticonHiddenInfo(props) {
    const {id, content} = props;

    let spanId = "gifticon-product-" + id;

    return (
        <>
            <span key={spanId} className="w-r__category" value={content}></span>
        </>
    )
}