import Image from "../../Image";

export default function ImageSection({id, className, imageSrc}) {
    return (
        <div className="col-lg-6 new-l__col-1 u-s-p-x-0">
            <div className="new-l__img-wrap u-d-block">
                <Image id={id} className={className} src={imageSrc} style={{width: "100%"}}></Image>
            </div>
        </div>
    );
};