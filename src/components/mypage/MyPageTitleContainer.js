
export default function MyPageTitleContainer(props) {
    const {title, subTitle} = props;

    return(

        <div>
            <h1 className="dash__h1 u-s-m-b-14">{title}</h1>
            <span className="dash__text u-s-m-b-30">{subTitle}</span>
        </div>

    )
}