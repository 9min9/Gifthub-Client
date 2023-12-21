import ProductCard from "../ui/image-card/ProductCard";


export default function ProductListContainer({
                                                 productList,
                                                 handleSearchChange,
                                                 searchInput,
                                                 handleSearchKeyUp,
                                                 increasePage,
                                             }) {
    return (
        <div className="section__content" id="product-area-div">
            <div className="container">
                <div className="u-s-p-y-20" style={{display: "flex", justifyContent: "end",}}>
                    <div className="main-form">
                        <InputWithLabel id="main-search" placeholder="검색"
                                        handleSearchChange={handleSearchChange} searchInput={searchInput}
                                        handleSearchKeyUp={handleSearchKeyUp}/>
                        <button className="btn btn--icon fas fa-search main-search-button" type="button"></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="u-s-m-t-30">
                            <div id="row-product-div" className="row">
                                {
                                    productList.map((product, index, products) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            index={index}
                                            products={products}
                                            increasePage={increasePage}
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


function InputWithLabel({id, placeholder, handleSearchChange, searchInput, handleSearchKeyUp}) {
    return <>
        <label htmlFor={id}></label>
        <input className="input-text input-text--border-radius input-text--style-1" type="text"
               id={id} placeholder={placeholder} value={searchInput} onChange={handleSearchChange}
               onKeyUp={handleSearchKeyUp}/>
    </>;
}