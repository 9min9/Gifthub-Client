export default function UpdateCartWrapper({handleClick}) {
    return <a className="route-box__link" id="update-cart" onClick={handleClick}>
        <i className="fas fa-sync"></i>
        <span>UPDATE CART</span>
    </a>;
};