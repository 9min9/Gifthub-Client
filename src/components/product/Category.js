
export default function Category({ category, index, selectorRef, handleCategoryClick, isSelected }) {

    return (
        <span
            className={`product-selector-container ${isSelected ? 'category-active' : ''}`}
            key={category.name.engName}
            ref={(el) => selectorRef.current[index] = el}
        >
      <span
          className="product-selector"
          data-index={index}
          style={{ backgroundImage: `url(${category.image})` }}
          onClick={handleCategoryClick}
      ></span>
      <br />
      <span className="product-name">{category.name.korName}</span>
    </span>
    );
}