import ActionTypes from "../actions/ActionTypes";

const initialState = {
  campaigns: [],
  campaign: {},
  countries: [],
  currencies: [],
  actionTypes: [],
  conditionTypes: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_CAMPAIGNS:
      return { ...state, campaigns: payload };
    case ActionTypes.GET_CAMPAIGN:
      return { ...state, campaign: payload };
    case ActionTypes.GET_COUNTRIES:
      return { ...state, countries: payload };
    case ActionTypes.GET_CURRENCIES:
      return { ...state, currencies: payload };
    case ActionTypes.GET_CONDITION_TYPES:
      return { ...state, conditionTypes: payload };
    case ActionTypes.GET_ACTION_TYPES:
      return { ...state, actionTypes: payload };
    default:
      return state;
  }
};
