import ProductCard from "../ui/image-card/ProductCard";
import InputWithLabel from "../ui/form/InputWithLabel";
import ImageModal from "../ui/modal/image-modal/ImageModal";
import {useState} from "react";


export default function ProductListContainer({
                                                 productList,
                                                 handleSearchChange,
                                                 searchInput,
                                                 handleSearchKeyUp,
                                                 increasePage,
                                             }) {
    const [isOpen, setIsOpen] = useState(false);

    const [imageSrc, setImageSrc] = useState("");
    const [clickedProductName, setClickedProductName] = useState("")

    const handleOpenModalClick = (event) => {
        setIsOpen(true);

        setImageSrc(event.target.src);
        setClickedProductName(event.target.dataset.productName)
    }

    const handleCloseModalClick = (event) => {
        setIsOpen(false);
    }

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
                                            handleOpenModalClick={handleOpenModalClick}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImageModal isOpen={isOpen}
                        handleCloseModalClick={handleCloseModalClick}
                        imageSrc={imageSrc}
                        clickedProductName={clickedProductName}/>
        </div>
    );
}


