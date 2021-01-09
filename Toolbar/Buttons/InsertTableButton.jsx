import { GridOn } from "@material-ui/icons";
import { useEditor } from "slate-react";
import { Editor } from "slate";
import React from "react";
import { insertTable, updateTable } from "../../slate-table/with-table";
import CreateTableModal from "../../Modal/CreateTableModal";
import ToolbarButton from "./ToolbarButton";

const isTableActive = editor => {
  const [table] = Editor.nodes(editor, { match: n => n.type === "table" });
  return !!table;
};

const InsertTableButton = () => {
  const editor = useEditor();
  return isTableActive(editor) ? (
    <CreateTableModal
      key="update"
      handleSelection={(rows, cols) => updateTable(editor, rows, cols)}
      renderOpenButton={handleOpen => (
        <ToolbarButton active={true} onClick={handleOpen}>
          <GridOn />
        </ToolbarButton>
      )}
    />
  ) : (
    <CreateTableModal
      key="insert"
      handleSelection={(rows, cols) => insertTable(editor, rows, cols)}
      renderOpenButton={handleOpen => (
        <ToolbarButton onClick={handleOpen}>
          <GridOn />
        </ToolbarButton>
      )}
    />
  );
};

export default InsertTableButton;
