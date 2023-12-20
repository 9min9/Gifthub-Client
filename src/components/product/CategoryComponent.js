export default function CategoryComponent({category, index, selectorRef, handleCategoryClick}) {
    return (
        <span
            className={`product-selector-container ${category.checked ? 'category-active' : ''}`}
            key={category.name.engName}
            ref={(el) => selectorRef.current[index] = el}
        >
      <span
          className="product-selector"
          data-index={index}
          style={{backgroundImage: `url(${category.image})`}}
          onClick={handleCategoryClick}
      ></span>
      <br/>
      <span className="product-name">{category.name.korName}</span>
    </span>
    );
}