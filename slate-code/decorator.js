import { Node, Text } from "slate";
import Prism from "prismjs";

export default editor => ([node, path]) => {
  const ranges = [];

  if (!Text.isText(node) || "code-block" !== Node.parent(editor, path).type) {
    return ranges;
  }

  const getLength = token => {
    if (typeof token === "string") {
      return token.length;
    } else if (typeof token.content === "string") {
      return token.content.length;
    } else {
      return token.content.reduce((l, t) => l + getLength(t), 0);
    }
  };

  const tokens = Prism.tokenize(node.text, Prism.languages.js);
  let start = 0;

  for (const token of tokens) {
    const length = getLength(token);
    const end = start + length;

    if (typeof token !== "string") {
      ranges.push({
        [token.type]: true,
        isCode: true,
        anchor: { path, offset: start },
        focus: { path, offset: end }
      });
    }

    start = end;
  }

  return ranges;
};
