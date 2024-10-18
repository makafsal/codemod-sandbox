import { Button } from "@carbon/react";
import React from "react";

function UnsortedPropExample() {
  return <h2>Component with unsorted propTypes</h2>;
}

export default UnsortedPropExample;

UnsortedPropExample.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  actionsPlacement: PropTypes.oneOf(["top", "bottom"]),
  children: PropTypes.node,
  className: PropTypes.string,
  clickZone: PropTypes.oneOf(["one", "two", "three"]),
  actionIcons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      onKeyDown: PropTypes.func,
      onClick: PropTypes.func,
      iconDescription: PropTypes.string,
      href: PropTypes.string
    })
  )
};
