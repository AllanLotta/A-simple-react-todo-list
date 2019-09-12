import React from "react";
import propTips from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li className="item">
      {tech}
      <button type="button" className="removeBtn" onClick={onDelete}>
        X
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Não informado"
};
TechItem.propTips = {
  tech: propTips.string,
  onDelete: propTips.func.isRequired
};
export default TechItem;
