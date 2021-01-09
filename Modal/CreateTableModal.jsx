import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Dialog from "@material-ui/core/Dialog";
import React from "react";

import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  divider: {
    marginTop: 20,
    marginBottom: 20
  }
}));

const CreateTableModal = props => {
  const classes = useStyles();
  const { renderOpenButton, handleSelection, insert } = props;
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState(3);
  const [cols, setCols] = React.useState(3);

  return (
    <div>
      {renderOpenButton(() => setOpen(true))}
      <Dialog
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        maxWidth="sm"
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
          {insert ? "Insert table" : "Update table"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <TextField
                type="number"
                label="Rows"
                onChange={e => setRows(e.target.value)}
                value={rows}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                type="number"
                label="Columns"
                onChange={e => setCols(e.target.value)}
                value={cols}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={() => {
              handleSelection(rows, cols);
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

CreateTableModal.propTypes = {
  renderOpenButton: PropTypes.func,
  handleSelection: PropTypes.func,
  insert: PropTypes.bool
};

export default CreateTableModal;
