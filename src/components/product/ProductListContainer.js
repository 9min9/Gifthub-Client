import ProductCard from "../ui/image-card/ProductCard";


export default function ProductListContainer({brand, productList, fetchProductListByBrand}) {
    return (
        <div className="section__content" id="product-area-div">
            <div className="container">
                <div className="u-s-p-y-20" style={{display: "flex", justifyContent: "end",}}>
                    <form className="main-form">
                        <InputWithLabel id="main-search" placeholder="검색"/>
                        <button className="btn btn--icon fas fa-search main-search-button" type="submit"></button>
                    </form>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="u-s-m-t-30">
                            <div id="row-product-div" className="row">
                                {
                                    productList.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function InputWithLabel({id, placeholder}) {
    return <>
        <label htmlFor={id}></label>
        <input className="input-text input-text--border-radius input-text--style-1" type="text"
               id={id} placeholder={placeholder}/>
    </>;
}