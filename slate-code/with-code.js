import { Node } from "slate";

export default editor => {
  const { insertData, insertBreak } = editor;

  editor.isCode = selection => {
    return (
      "code-block" === Node.parent(editor, selection.focus.path).type &&
      "code-block" === Node.parent(editor, selection.anchor.path).type
    );
  };

  editor.insertData = fragment => {
    if (editor.isCode(editor.selection)) {
      editor.insertText(fragment.getData("text"));
    } else {
      insertData(fragment);
    }
  };

  editor.insertBreak = () => {
    if (editor.isCode(editor.selection)) {
      editor.insertText("\n");
    } else {
      insertBreak();
    }
  };

  return editor;
};
