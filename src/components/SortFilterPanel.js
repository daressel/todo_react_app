export const SortFilterPanel = () => {
  return(
    <div className="sort-filter-panel">
      <div className="filters">
        <span className="filter">All</span>
        <span className="filter">Done</span>
        <span className="filter">Undone</span>
      </div>
      <div className="sort">
        Sort by Date
        <span className="action">
          <i className="fas fa-arrow-up"></i>
        </span>
        <span className="action">
          <i className="fas fa-arrow-down"></i>
        </span>
      </div>
    </div>
  )
}