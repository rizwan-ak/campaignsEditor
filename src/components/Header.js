import React, { Component } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Menu,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
} from "@material-ui/core";

import {
  Edit,
  ImportExport,
  Add,
  KeyboardArrowDown,
  Block,
  Save,
} from "@material-ui/icons";

import { Link } from "react-router-dom";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { connect } from "react-redux";
import {
  deleteCampaign,
  activateCampaign,
  reorderCampaigns,
} from "../redux/actions/ActionCreator";

class Header extends Component {
  state = {
    showCancelModal: false,
    showSaveModal: false,
    copied: false,
    reorder: false,
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <div>
        {this.props.hideSearch ? null : (
          <>
            <TextField
              className="marginRight noBorder"
              placeholder="enter"
              id="outlined-basic"
              variant="outlined"
              size="small"
            />
            <Button className="noBorder" variant="contained">
              Search
            </Button>
          </>
        )}
        {this.props.showSave ? (
          <div style={{ float: "right" }}>
            <Button
              variant="contained"
              className="marginRight noBorder"
              color="secondary"
              onClick={() => this.setState({ showCancelModal: true })}
            >
              <Block className="marginRight" /> Cancel
            </Button>

            <Button
              className="noBorder"
              onClick={() => {
                this.props.saveFn();
                this.setState({ showSaveModal: true });
              }}
              variant="contained"
            >
              <Save className="marginRight" /> Save
            </Button>
          </div>
        ) : this.state.reorder ? (
          <div style={{ float: "right" }}>
            <Button
              to="/"
              component={Link}
              variant="contained"
              className="marginRight noBorder"
              onClick={() => {
                this.props.reorder(false);
                this.setState({ reorder: false });
              }}
              color="secondary"
            >
              <Block className="marginRight" /> Cancel
            </Button>
            <Button
              to="/"
              component={Link}
              className="noBorder"
              onClick={async () => {
                await this.props.reorderCampaigns(this.props.reorderData);
                this.props.reorder(false);
                this.setState({ reorder: false });
              }}
              variant="contained"
            >
              <Save className="marginRight" /> Save
            </Button>
          </div>
        ) : (
          <div style={{ float: "right" }}>
            <Button
              to="/addCampaign"
              component={Link}
              className="noBorder marginRight"
              variant="contained"
            >
              <Add className="marginRight" />
              Add
            </Button>

            <Button
              to={{
                pathname: "/addCampaign",
                campaign: this.props.campaign,
              }}
              component={Link}
              disabled={this.props.hideOptions}
              variant="contained"
              className="marginRight noBorder"
            >
              <Edit className="marginRight" /> Edit
            </Button>

            <Button
              disabled={this.props.hideOptions}
              variant="contained"
              className="marginRight noBorder"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(event) => this.handleClick(event)}
            >
              <KeyboardArrowDown className="marginRight" />
              Actions
            </Button>

            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={() => this.handleClose()}
            >
              <MenuItem
                onClick={() => this.props.activateCampaign(this.props.id, true)}
              >
                Activate
              </MenuItem>
              <MenuItem
                onClick={() =>
                  this.props.activateCampaign(this.props.id, false)
                }
              >
                Deactivate
              </MenuItem>
              <MenuItem
                onClick={() => this.props.deleteCampaign(this.props.id)}
              >
                Delete
              </MenuItem>
            </Menu>

            <Button
              onClick={() => {
                this.props.reorder(true);
                this.setState({ reorder: true });
              }}
              className="noBorder"
              variant="contained"
            >
              <ImportExport className="marginRight" /> Reorder
            </Button>
          </div>
        )}

        {/* //Cancel Modal */}
        <Dialog open={this.state.showCancelModal}>
          <DialogTitle>Cancel</DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Are you sure you want to cancel? Your changes will not be saved.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              to="/"
              component={Link}
              className="noBorder marginRight"
              onClick={() => this.setState({ showCancelModal: false })}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
            <Button
              className="noBorder"
              onClick={() => this.setState({ showCancelModal: false })}
              variant="contained"
            >
              Stay
            </Button>
          </DialogActions>
        </Dialog>

        {/* //Discount Modal */}
        <Dialog open={this.state.showSaveModal}>
          <DialogTitle>Discount Code Saved</DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Your disount code is now saved and activated.
              <br />
              From:
              <span className="boldText">
                {this.props?.state?.startDate +
                  " - " +
                  this.props?.state?.endDate}
              </span>
              <br />
              Countries:
              <span className="boldText">
                {this.props.state?.countries?.map((c) => c.code).join(", ")}
              </span>
              <br />
              Currencies:
              <span className="boldText">
                {this.props.state?.currencies?.map((c) => c.code).join(", ")}
              </span>
              <br />
            </Typography>
            <div>
              <CopyToClipboard
                className="marginTop"
                text={this.props?.state?.code}
                onCopy={() => this.setState({ copied: true })}
              >
                <Button variant="outlined">
                  {this.props?.state?.code}
                  <svg
                    style={{ marginLeft: 30 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                  </svg>
                </Button>
              </CopyToClipboard>
              {this.state.copied ? <span>Copied.</span> : null}
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              to="/"
              component={Link}
              className="noBorder"
              onClick={() => this.setState({ showSaveModal: false })}
              variant="contained"
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCampaign: (id) => dispatch(deleteCampaign(id)),
    reorderCampaigns: (id) => dispatch(reorderCampaigns(id)),
    activateCampaign: (id, val) => dispatch(activateCampaign(id, val)),
  };
};

export default connect(null, mapDispatchToProps)(Header);
