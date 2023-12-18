export default function MiniCartDeleteIcon({cartId}) {
    return <a className="mini-product__delete-link far fa-trash-alt mini-delete"
              id={"mini-delete-" + cartId}></a>
}