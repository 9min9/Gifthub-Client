export default function MiniCartDeleteIcon({cartId, _onClick}) {
    return <a className="mini-product__delete-link far fa-trash-alt mini-delete"
              id={"mini-delete-" + cartId} onClick={_onClick}></a>
}