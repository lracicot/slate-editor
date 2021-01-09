import { WebAsset } from "@material-ui/icons";
import { useEditor } from "slate-react";
import React from "react";
import ToolbarButton from "./ToolbarButton";

const DebugButton = () => {
  const editor = useEditor();
  return (
    <ToolbarButton
      onClick={() => {
        console.log(editor.children);
        console.log(editor.selection);
      }}
    >
      <WebAsset />
    </ToolbarButton>
  );
};

export default DebugButton;
