export default function ClearCartWrapper({handleClick}) {
    return <a className="route-box__link" id="clear-cart" onClick={handleClick}>
        <i className="fas fa-trash"></i>
        <span>CLEAR CART</span></a>
};