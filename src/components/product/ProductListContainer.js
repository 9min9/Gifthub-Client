import ProductCard from "./ProductCard";
import InputWithLabel from "../ui/form/InputWithLabel";
import Modal from "../ui/modal/image-modal/Modal";
import {useState} from "react";
import ImageSection from "../ui/modal/image-modal/ImageSection";
import ModalInfoSection from "./ModalInfoSection";


export default function ProductListContainer({
                                                 productList,
                                                 handleSearchChange,
                                                 searchInput,
                                                 handleSearchKeyUp,
                                                 increasePage,
                                                 priceList,
                                                 fetchPriceList,
                                                 handleAddToCartClick,
                                             }) {
    const [isOpen, setIsOpen] = useState(false);

    const [imageSrc, setImageSrc] = useState("");
    const [clickedProductName, setClickedProductName] = useState("")

    const handleOpenModalClick = (event) => {
        setIsOpen(true);

        setImageSrc(event.target.src);
        setClickedProductName(event.target.dataset.productName);
        fetchPriceList(event.target.dataset.productId);
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
            <Modal isOpen={isOpen}
                   handleCloseModalClick={handleCloseModalClick}
                   imageSrc={imageSrc}
                   title={clickedProductName}
                   contentList={priceList}>

                <div className="row u-s-m-x-0">
                    <ImageSection imageSrc={imageSrc}></ImageSection>
                    <ModalInfoSection title={clickedProductName} contentList={priceList}
                                      handleAddToCartClick={handleAddToCartClick}></ModalInfoSection>
                </div>
            </Modal>
        </div>
    );
}


