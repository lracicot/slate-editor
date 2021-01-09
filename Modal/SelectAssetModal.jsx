import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import React from "react";

import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  divider: {
    marginTop: 20,
    marginBottom: 20
  }
}));

const SelectAssetModal = props => {
  const classes = useStyles();
  const { renderOpenButton, handleSelection, insert, renderAssetUi } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedAsset, setSelectedAsset] = React.useState(null);

  return (
    <div>
      {renderOpenButton(() => setOpen(true))}
      <Dialog
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        maxWidth="xl"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <DialogTitle id="simple-dialog-title">
          {insert ? "Insert image" : "Update image"}
        </DialogTitle>
        <DialogContent>
          {renderAssetUi(setSelectedAsset, selectedAsset)}
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            disabled={selectedAsset ? "" : "disabled"}
            onClick={() => {
              handleSelection(selectedAsset);
              setOpen(false);
            }}
          >
            {insert ? "Insert" : "Update"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

SelectAssetModal.defaultProps = {
  insert: true
};

SelectAssetModal.propTypes = {
  renderOpenButton: PropTypes.func,
  handleSelection: PropTypes.func,
  renderAssetUi: PropTypes.func,
  insert: PropTypes.bool
};

export default SelectAssetModal;
