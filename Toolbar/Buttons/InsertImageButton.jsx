import { Image } from "@material-ui/icons";
import { useEditor } from "slate-react";
import React from "react";

import PropTypes from "prop-types";

import { insertImage } from "../../slate-image/with-image";
import SelectAssetModal from "../../Modal/SelectAssetModal";
import ToolbarButton from "./ToolbarButton";

// const isImageActive = editor => {
//   const [image] = Editor.nodes(editor, { match: n => n.type === "image" });
//   return !!image;
// };

const InsertImageButton = ({ renderAssetUi }) => {
  const editor = useEditor();
  return (
    <SelectAssetModal
      handleSelection={asset =>
        insertImage(editor, `https://${asset.public_url}`)
      }
      renderAssetUi={renderAssetUi}
      renderOpenButton={handleOpen => (
        <ToolbarButton onClick={handleOpen}>
          <Image />
        </ToolbarButton>
      )}
    />
  );
};

InsertImageButton.propTypes = {
  renderAssetUi: PropTypes.func.isRequired
};

export default InsertImageButton;
