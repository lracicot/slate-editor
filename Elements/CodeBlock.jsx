import oneDark from "../slate-code/prism/themes/one-dark";
import { css } from "emotion";
import React, { forwardRef } from "react";

import PropTypes from "prop-types";

const CodeBlock = forwardRef(function CodeBlock(
  { children, ...attributes },
  ref
) {
  return (
    <pre
      ref={ref}
      className={css`
        ${oneDark['pre[class*="language-"]']}
      `}
    >
      <code
        {...attributes}
        className={css`
          ${oneDark['code[class*="language-"]']}
        `}
      >
        {children}
      </code>
    </pre>
  );
});

CodeBlock.propTypes = {
  attributes: PropTypes.any,
  children: PropTypes.any
};

export default CodeBlock;
