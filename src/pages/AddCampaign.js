import React, { Component } from "react";
import Header from "../components/Header";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import { connect } from "react-redux";
import {
  getCountries,
  getCurrencies,
  getActionTypes,
  getConditionTypes,
  addCampaign,
} from "../redux/actions/ActionCreator";

class AddCampaign extends Component {
  state = {
    showModal: false,
    modalTitle: "",
    modalBody: "",
    name: "",
    startDate: new Date(),
    endDate: new Date(),
    countries: [],
    currencies: [],
    isActive: false,
    priority: "",
    discountPercentage: "",
    actionTypeName: "",
    conditionsTypeName: "",
    code: "",
    numberOfUsages: 0,
  };

  componentDidMount() {
    if (this.props.location.campaign) {
      const {
        id,
        name,
        startDate,
        endDate,
        action,
        conditions,
        countries,
        currencies,
      } = this.props.location.campaign;
      const code = Object.keys(conditions[0].voucherCodes)[0];
      const numberOfUsages = conditions[0].voucherCodes[code];
      this.setState({
        id,
        name,
        startDate,
        endDate,
        code,
        numberOfUsages,
        discountPercentage: action.discountPercentage,
        actionTypeName: action.typeName,
        conditionsTypeName: conditions[0].typeName,
        countries: countries,
        currencies: currencies,
      });
    }
    this.props.getCountries();
    this.props.getCurrencies();
    this.props.getConditionTypes();
    this.props.getActionTypes();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onCountriesChange = (event, values) => {
    this.setState({
      countries: values,
    });
  };
  onCurrenciesChange = (event, values) => {
    this.setState({
      currencies: values,
    });
  };
  render() {
    console.log(this.state.countries);
    return (
      <div className="App">
        <Header
          showSave
          hideSearch
          saveFn={() => this.props.addCampaign(this.state)}
          code={this.state.code}
        />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div className="marginRight">
            <h4>Information</h4>
            <div>
              <TextField
                fullWidth
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Name"
                id="outlined-basic"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                fullWidth
                name="startDate"
                value={this.state.startDate}
                onChange={this.handleChange}
                variant="outlined"
                className="marginTop"
                type="datetime-local"
                defaultValue="2017-05-24"
              />
            </div>
            <div>
              <TextField
                fullWidth
                name="endDate"
                value={this.state.endDate}
                onChange={this.handleChange}
                variant="outlined"
                className="marginTop"
                type="datetime-local"
                defaultValue="2017-05-24"
              />
            </div>

            <Autocomplete
              multiple
              fullWidth
              autoHighlight
              filterSelectedOptions
              className="marginTop"
              options={this.props?.countries}
              onChange={this.onCountriesChange}
              getOptionLabel={(option) => option.name}
              value={this.state.countries}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Countries"
                />
              )}
            />
            <Autocomplete
              multiple
              fullWidth
              autoHighlight
              filterSelectedOptions
              className="marginTop"
              options={this.props?.currencies}
              onChange={this.onCurrenciesChange}
              getOptionLabel={(option) => option.code}
              value={this.state.currencies}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Currencies"
                />
              )}
            />
          </div>
          <div className="marginRight">
            <h4>Action</h4>
            <div>
              <Select
                name="actionTypeName"
                value={this.state.actionTypeName}
                onChange={this.handleChange}
                variant="outlined"
                fullWidth
              >
                {this.props.actionTypes.map((action) => (
                  <MenuItem value={action.key}>{action.value}</MenuItem>
                ))}
              </Select>
            </div>
            <div>
              <OutlinedInput
                className="marginTop"
                name="discountPercentage"
                value={this.state.discountPercentage}
                onChange={this.handleChange}
                placeholder="Order Discount %"
                endAdornment={
                  <InputAdornment
                    onClick={() =>
                      this.setState({
                        showModal: true,
                        modalTitle: "Order Discount %",
                        modalBody:
                          "This discount will be apply to the order total excluding VAT and Shipment.",
                      })
                    }
                    position="end"
                  >
                    <IconButton edge="end">
                      <HelpOutlineIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
          </div>
          <div>
            <h4>Condition</h4>
            <div>
              <Select
                name="conditionsTypeName"
                value={this.state.conditionsTypeName}
                onChange={this.handleChange}
                placeholder="asd"
                variant="outlined"
                fullWidth
              >
                {this.props.conditionTypes.map((action) => (
                  <MenuItem value={action.key}>{action.value}</MenuItem>
                ))}
              </Select>
            </div>
            <div>
              <OutlinedInput
                name="code"
                value={this.state.code}
                onChange={this.handleChange}
                className="marginTop"
                placeholder="Code"
                endAdornment={
                  <InputAdornment
                    onClick={() =>
                      this.setState({
                        showModal: true,
                        modalTitle: "Campaign Code",
                        modalBody:
                          "The user needs to fill in the campaigncode to get the discount The code is CASE SENSITIVE.",
                      })
                    }
                    position="end"
                  >
                    <IconButton edge="end">
                      <HelpOutlineIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div>
              <OutlinedInput
                name="numberOfUsages"
                value={this.state.numberOfUsages}
                onChange={this.handleChange}
                className="marginTop"
                type="number"
                placeholder="Number of usages"
                endAdornment={
                  <InputAdornment
                    onClick={() =>
                      this.setState({
                        showModal: true,
                        modalTitle: "Number of Usages",
                        modalBody:
                          "How many times this campaign code can be used before it is consumed.",
                      })
                    }
                    position="end"
                  >
                    <IconButton edge="end">
                      <HelpOutlineIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
          </div>
        </Grid>

        {/* //Modal */}
        <Dialog open={this.state.showModal}>
          <DialogTitle>{this.state.modalTitle}</DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>{this.state.modalBody}</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              className="noBorder"
              onClick={() => this.setState({ showModal: false })}
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

const mapStateToProps = (state) => ({
  countries: state.countries,
  currencies: state.currencies,
  conditionTypes: state.conditionTypes,
  actionTypes: state.actionTypes,
  campaign: state.campaign,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(getCountries()),
    getCurrencies: () => dispatch(getCurrencies()),
    getActionTypes: () => dispatch(getActionTypes()),
    getConditionTypes: () => dispatch(getConditionTypes()),
    addCampaign: (data) => dispatch(addCampaign(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCampaign);
