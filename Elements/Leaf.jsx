import { css } from "emotion";
import oneDark from "../slate-code/prism/themes/one-dark";
import React from "react";
import PropTypes from "prop-types";

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.code) {
    children = (
      <code
        {...attributes}
        className={css`
          border: 1px solid #ccc;
          border-radius: 3px;
          font-size: 0.9em;
          padding: 1px;
        `}
      >
        {children}
      </code>
    );
  }

  if (leaf.isCode || leaf.code) {
    attributes.className = css`
      ${Object.keys(oneDark).map(prop => leaf[prop] && oneDark[prop])}
    `;
  }

  return <span {...attributes}>{children}</span>;
};

Leaf.propTypes = {
  attributes: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  leaf: PropTypes.any.isRequired
};

export default Leaf;
