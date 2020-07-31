import React, { Component } from "react";
import Header from "../components/Header";

import {
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  Switch,
} from "@material-ui/core";

import ReactDragListView from "react-drag-listview";
import ImportExport from "@material-ui/icons/ImportExport";
import { connect } from "react-redux";

import {
  getCampaigns,
  getCampaign,
  activateCampaign,
} from "../redux/actions/ActionCreator";

class Campaigns extends Component {
  state = {
    reorder: false,
    hideOptions: true,
    selectedIndex: -1,
    active: false,
    data: this.props.campaigns,
  };

  componentWillMount() {
    this.props.getCampaigns();
  }
  componentWillReceiveProps(props) {
    this.setState({ data: props.campaigns });
  }

  render() {
    console.log(this.props.campaigns);
    const that = this;
    const dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const data = [...that.state.data];
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        that.setState({ data });
      },
      nodeSelector: this.state.reorder ? "tr" : "section",
      handleSelector: this.state.reorder ? "tr" : "section",
    };
    return (
      <div className="App">
        <Header
          reorderData={this.state.data.map((m) => m.id)}
          reorder={(reorder) => this.setState({ reorder })}
          hideOptions={this.state.hideOptions}
          id={this.props.campaign.id}
          campaign={this.props.campaign}
        />
        <TableContainer className="marginTop" component={Paper}>
          <ReactDragListView {...dragProps}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Currency</TableCell>
                  <TableCell>StartDate</TableCell>
                  <TableCell>StartDate</TableCell>
                  <TableCell align="right">Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map((c, index) => (
                  <TableRow
                    style={{ cursor: this.state.reorder ? "grab" : null }}
                    key={index}
                    onClick={() => {
                      this.props.getCampaign(c.id);
                      this.setState({
                        hideOptions: false,
                        selectedIndex: index,
                      });
                    }}
                    className={this.state.selectedIndex === index && "blueBg"}
                  >
                    <TableCell>{c.name}</TableCell>
                    <TableCell>
                      {c.countries.map((c) => c.code).join(", ")}
                    </TableCell>
                    <TableCell>
                      {c.currencies.map((c) => c.code).join(", ")}
                    </TableCell>
                    <TableCell>{c.startDate}</TableCell>
                    <TableCell>{c.endDate}</TableCell>
                    <TableCell align="right">
                      {this.state.reorder ? (
                        <ImportExport />
                      ) : (
                        <Switch
                          checked={c.isActive}
                          onChange={() =>
                            this.props.activateCampaign(c.id, !c.isActive)
                          }
                          // name="checkedB"
                          size="medium"
                          color="primary"
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ReactDragListView>
        </TableContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  campaigns: state.campaigns,
  campaign: state.campaign,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getCampaigns: () => dispatch(getCampaigns()),
    getCampaign: (id) => dispatch(getCampaign(id)),
    activateCampaign: (id, val) => dispatch(activateCampaign(id, val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);
