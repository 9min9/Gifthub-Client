export default function Brand({brand}) {
  return <div className="filter__category-wrapper">
    <button className="btn filter__btn filter__btn--style-1 brand-filter total-filter" type="button" data-filter="*">{brand}</button>
  </div>;
}