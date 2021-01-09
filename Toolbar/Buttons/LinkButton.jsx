import { Link } from "@material-ui/icons";
import { useSlate } from "slate-react";
import React from "react";

import {
  insertLink,
  isLinkActive,
  removeLink
} from "../../slate-link/with-link";
import ToolbarButton from "./ToolbarButton";

const LinkButton = () => {
  const editor = useSlate();
  return (
    <ToolbarButton
      active={isLinkActive(editor)}
      onMouseDown={event => {
        event.preventDefault();
        if (isLinkActive(editor)) {
          removeLink(editor);
        } else {
          const url = window.prompt("Enter the URL of the link:");
          if (!url) return;
          insertLink(editor, url);
        }
      }}
    >
      <Link />
    </ToolbarButton>
  );
};

export default LinkButton;
