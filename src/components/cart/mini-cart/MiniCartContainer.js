import MiniCartDeleteIcon from "./MiniCartDeleteIcon";
import MiniCartImageWrapper from "./MiniCartImageWrapper";
import MiniCartInfoWrapper from "./MiniCartInfoWrapper";

export default function MiniCartContainer({cart}) {
    const src = "images/product/electronic/product3.jpg";

    return <div className={"card-mini-product"} id={`div-mini-cart-${cart.gifticonDto.id}`}>
        <div className="mini-product">
            <MiniCartImageWrapper src={src}/>
            <MiniCartInfoWrapper productName={cart.gifticonDto.productName} gifticonId={cart.gifticonDto.id}
                                 gifticonPrice={cart.gifticonDto.price}/>
        </div>
        <MiniCartDeleteIcon cartId={cart.id}/>
    </div>;
}