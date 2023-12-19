

export default function GifticonIntroContainer(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section__text-wrap">
                        <h1 className="section__heading u-c-secondary">{props.title}</h1>
                        <h3>{props.content}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}