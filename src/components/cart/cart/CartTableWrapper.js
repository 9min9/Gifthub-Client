import CartWrapper from "./CartWrapper";

export default function CartTableWrapper({carts, trashHandleClick}) {
    return <table className="table-p">
        <tbody id="cart-list">
        {carts.map((cart) => {
            return <CartWrapper key={cart.id} cartId={cart.id} productName={cart.gifticonDto.productDto.name}
                                productId={cart.gifticonDto.productDto.id} gifticonPrice={cart.gifticonDto.price}
                                trashHandleClick={trashHandleClick}/>
        })}
        </tbody>
    </table>;
};