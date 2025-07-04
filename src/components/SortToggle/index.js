import React from "react";
import PropTypes from "prop-types";

const SortToggle = ({ sortOrder, toggleSort }) => (
  <button className="btn btn-primary mb-3" onClick={toggleSort}>
    {sortOrder === "ASC"
      ? "Sort: Low to High"
      : sortOrder === "DESC"
      ? "Sort: High to Low"
      : "Sort by Price"}
  </button>
);

SortToggle.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  toggleSort: PropTypes.func.isRequired
};

export default SortToggle;
