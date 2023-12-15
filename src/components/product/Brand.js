export default function Brand({brand, checked, handleClick}) {
  if (checked) {
    return <div className="filter__category-wrapper">
      <button className="btn filter__btn filter__btn--style-1 brand-filter total-filter js-checked" type="button"
              data-filter="*" onClick={handleClick}>{brand}</button>
    </div>;
  } else {
    return <div className="filter__category-wrapper">
      <button className="btn filter__btn filter__btn--style-1 brand-filter total-filter" type="button"
              data-filter="*" onClick={handleClick}>{brand}</button>
    </div>;
  }
};