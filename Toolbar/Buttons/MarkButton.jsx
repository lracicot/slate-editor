import { Editor } from "slate";
import { useSlate } from "slate-react";
import React from "react";

import PropTypes from "prop-types";

import ToolbarButton from "./ToolbarButton";

export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <ToolbarButton
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </ToolbarButton>
  );
};

MarkButton.propTypes = {
  format: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired
};

export default MarkButton;
