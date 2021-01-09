import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

import PropTypes from "prop-types";

import CodeBlock from "./CodeBlock";
import ImageElement from "./ImageElement";
import TableContainer from "./TableContainer";

const Element = props => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case "table":
      return <TableContainer {...attributes}>{children}</TableContainer>;
    case "table-row":
      return <TableRow {...attributes}>{children}</TableRow>;
    case "table-cell":
      return <TableCell {...attributes}>{children}</TableCell>;
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    case "code-block":
      return <CodeBlock {...attributes}>{children}</CodeBlock>;
    case "image":
      return <ImageElement {...props} />;
    case "link":
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};

Element.propTypes = {
  attributes: PropTypes.any,
  children: PropTypes.any,
  element: PropTypes.any
};

export default Element;
