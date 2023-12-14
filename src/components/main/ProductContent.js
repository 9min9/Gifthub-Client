import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";

export default function ProductContent({categoryList}) {
  return (
    <div className="u-s-p-y-30" id="show-product-div">
      <ProductHeader categoryList={categoryList}/>
      <ProductList/>
    </div>
  );
}