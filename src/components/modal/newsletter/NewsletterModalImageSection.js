import Image from "../../ui/Image";

export default function NewsletterModalImageSection() {
    return(
        <div className="col-lg-6 new-l__col-1 u-s-p-x-0">
            <div className="new-l__img-wrap u-d-block">
                <Image id={"gifticon-modal-img"} className={"u-img-fluid u-d-block"}></Image>
            </div>
        </div>
    );
}