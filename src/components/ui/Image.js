
export default function Image(props) {
    const {id, className, src, alt = "이미지가 없습니다"} = props;

    return(
        <img id={id} className={className} src={src} alt={alt} />
    );
}