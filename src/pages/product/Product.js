import "../../css/custom/index.css";
import ProductSection from "../../components/product/ProductSection";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import useIntersectionObserver from "../../components/ui/useIntersectionObserver";

export default function Product() {
    // let page = 0;
    const [page, setPage] = useState(0);

    const [brandList, setBrandList] = useState([]);

    const [categoryList, setCategoryList] = useState([]);
    const [categoryContent, setCategoryContent] = useState([]);
    const [productList, setProductList] = useState([]);

    const [searchInput, setSearchInput] = useState("")

    const selectorRef = useRef([]);

    const [observe, unobserve] = useIntersectionObserver(() => {
        setPage(page + 1);
    });

//DOM이 road 되었을 때 getCategory 호출
    useEffect(() => {
        getCategory().then(r => {
            setCategoryList(r);
        });
    }, []);

//categoryList가 변경되었을 때 setCategoryContent
    useEffect(() => {
        setContent();
    }, [categoryList]);

    useEffect(() => {
        fetchBrandName();
    }, [categoryContent]);

    useEffect(() => {
        fetchProductByName(true);
        setPage(0);
    }, [categoryContent, brandList]);

    useEffect(() => {
        fetchProductByName(false);
    }, [page]);

    // TODO 검색 방법 변경으로 인한 주석
    // useEffect(() => {
    //     let categoryName = "";
    //     let brandName = "";
    //
    //     for (let category of categoryContent) {
    //         if (category.checked) {
    //             categoryName = category.name.korName.replaceAll("/", "-");
    //         }
    //     }
    //
    //     for (let brand of brandList) {
    //         if (brand.checked) {
    //             brandName = brand.brandName;
    //         }
    //     }
    //
    //     fetchProduct(categoryName, brandName, searchInput);
    // }, [searchInput]);


    const getCategory = async () => {
        let data;

        await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/product/categories`,
            {headers: {Authorization: localStorage.getItem("token")}})
            .then(function (result) {
                data = result.data;
            })
            .catch(function (error) {
                console.log(error);
            })

        return data;
    }

    const setContent = () => {
        const imagePath = `/images/categorylogo/`;

        let updatedCategoryContent = categoryList.map(category => ({
            name: category,
            checked: category.engName === "ALL",
            image: imagePath + category.engName + ".png"
        }));
        setCategoryContent(updatedCategoryContent);
    }

    const fetchBrandName = async () => {
        if (categoryContent.length > 0) {
            let brandLists = [];

            let category = (categoryContent.filter((category) => category.checked)[0].name.engName.replaceAll("/", "-").toLowerCase());
            let url = `${process.env.REACT_APP_SERVER_URL}/api/product/${category}/brands`;

            console.log("category(categoryContainer) : " + category)

            await axios
                .get(url, {headers: {Authorization: localStorage.getItem("token")}})
                .then((result) => {
                    brandLists.push({brandName: "전체", checked: true})
                    for (let r of result.data) {
                        brandLists.push({brandName: r, checked: false})
                    }
                    setBrandList(brandLists);
                });
        }
    }

    const handleCategoryClick = (event) => {
        const selectedIndex = Number(event.target.dataset.index);
        const updatedCategoryList = categoryContent.map((category, index) => ({
            ...category,
            checked: index === selectedIndex
        }));
        setCategoryContent(updatedCategoryList);
    }

    const fetchProduct = async (category, brand, name, replace) => {
        if (!category || !brand) {
            return;
        }

        if (replace) {
            setProductList([]);
        }

        let url = ``;

        if (name) {
            url = `${process.env.REACT_APP_SERVER_URL}/api/product/page/search/${category}/${brand}/${name}?page=${page}&size=12`;
        } else {
            url = `${process.env.REACT_APP_SERVER_URL}/api/product/page/${category}/${brand}?page=${page}&size=12`;
        }

        await axios.get(url, {headers: {Authorization: localStorage.getItem("token")}})
            .then((result) => {
                if (replace) {
                    setProductList(result.data.content);
                } else {
                    let updateProductList = [...productList];

                    setProductList(updateProductList.concat(result.data.content));
                }
            })
    }

    const handleBrandClick = (event) => {
        const updatedBrandList = [...brandList];

        updatedBrandList.forEach(brand => {
            if (brand.brandName === event.target.innerText) {
                brand.checked = true;
            } else {
                brand.checked = false;
            }
        })

        setBrandList(updatedBrandList);
    }

    const handleSearchChange = (event) => {
        let inputs = event.target.value;

        setSearchInput(inputs);
    }

    const handleSearchKeyUp = (event) => {
        if (event.key === "Enter") {
            fetchProductByName(true)
            setPage(0);
        }
    }

    const fetchProductByName = (replace) => {
        let categoryName = "";
        let brandName = "";

        for (let category of categoryContent) {
            if (category.checked) {
                categoryName = category.name.korName.replaceAll("/", "-");
            }
        }

        for (let brand of brandList) {
            if (brand.checked) {
                brandName = brand.brandName;
            }
        }

        fetchProduct(categoryName, brandName, searchInput, replace);
    }

    const increasePage = () => {
        setPage((page) => page + 1);
    }

    return (
        <ProductSection productList={productList} categoryContent={categoryContent}
                        brandList={brandList} fetchBrandName={fetchBrandName}
                        handleCategoryClick={handleCategoryClick} selectorRef={selectorRef}
                        handleBrandClick={handleBrandClick}
                        handleSearchChange={handleSearchChange}
                        searchInput={searchInput} handleSearchKeyUp={handleSearchKeyUp}
                        increasePage={increasePage}></ProductSection>
    );
};