import { Transforms, Editor, Range, Point } from "slate";

export const updateTable = (editor, rowsNb) => {
  const [table] = Editor.nodes(editor, { match: n => n.type === "table" });

  // Check if we remove rows
  if (table[0].children.length > rowsNb) {
    const [rows] = Editor.nodes(editor, { match: n => n.type === "table-row" });
    console.log(rows);
    Transforms.removeNodes(editor, { match: n => n.type === "table-row" });
  }

  // // Check if we add rows
  // if (table[0].children.length > rowsNb) {
  //   for (let i = table[0].children.length; i != rowsNb; i--) {
  //     Transforms.removeNodes(editor, { match: n => n.type === "table-row" });
  //   }
  // }
};

export const insertTable = (editor, rowsNb, cols) => {
  const cells = [];
  const rows = [];

  for (let i = 0; i < cols; i++) {
    cells.push({
      type: "table-cell",
      children: [{ text: "" }]
    });
  }

  for (let i = 0; i < rowsNb; i++) {
    rows.push({
      type: "table-row",
      children: cells
    });
  }

  Transforms.insertNodes(editor, {
    type: "table",
    children: rows
  });
};

export const withTable = editor => {
  const { deleteBackward, deleteForward, insertBreak } = editor;

  editor.deleteBackward = unit => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: n => n.type === "table-cell"
      });

      if (cell) {
        const [, cellPath] = cell;
        const start = Editor.start(editor, cellPath);

        if (Point.equals(selection.anchor, start)) {
          return;
        }
      }
    }

    deleteBackward(unit);
  };

  editor.deleteForward = unit => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: n => n.type === "table-cell"
      });

      if (cell) {
        const [, cellPath] = cell;
        const end = Editor.end(editor, cellPath);

        if (Point.equals(selection.anchor, end)) {
          return;
        }
      }
    }

    deleteForward(unit);
  };

  editor.insertBreak = () => {
    const { selection } = editor;

    if (selection) {
      const [table] = Editor.nodes(editor, { match: n => n.type === "table" });

      if (table) {
        return;
      }
    }

    insertBreak();
  };

  return editor;
};
