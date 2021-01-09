import { css, cx } from "emotion";
import React from "react";
import PropTypes from "prop-types";

const ToolbarButton = ({ className, active, reversed, ...props }) => (
  <span
    {...props}
    className={cx(
      className,
      css`
        cursor: pointer;
        color: ${reversed
          ? active
            ? "white"
            : "#aaa"
          : active
          ? "black"
          : "#ccc"};
      `
    )}
  />
);

ToolbarButton.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  reversed: PropTypes.bool
};

export default ToolbarButton;
