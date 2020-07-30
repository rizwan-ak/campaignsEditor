import ActionTypes from "./ActionTypes";
import axios from "axios";

export const getCampaigns = () => {
  return async (dispatch) => {
    const campaigns = await axios.get(
      "http://eleikoab.test.workplace.nu/admin/api/campaigns"
    );
    dispatch({
      type: ActionTypes.GET_CAMPAIGNS,
      payload: campaigns.data,
    });
  };
};

export const getCampaign = (id) => {
  return async (dispatch) => {
    const campaign = await axios.get(
      `http://eleikoab.test.workplace.nu/admin/api/campaigns/${id}`
    );
    dispatch({
      type: ActionTypes.GET_CAMPAIGN,
      payload: campaign.data,
    });
  };
};

export const deleteCampaign = (id) => {
  return async (dispatch) => {
    await axios.delete(
      `http://eleikoab.test.workplace.nu/admin/api/campaigns/${id}`
    );
    dispatch({
      type: ActionTypes.DELETE_CAMPAIGN,
    });
  };
};
export const activateCampaign = (id, val) => {
  return async (dispatch) => {
    await axios.post(
      `http://eleikoab.test.workplace.nu/admin/api/campaigns/${id}/activate/${val}`
    );
    dispatch({
      type: ActionTypes.ACTIVATE_CAMPAIGN,
    });
  };
};

export const addCampaign = (data) => {
  return async (dispatch) => {
    await axios.post("http://eleikoab.test.workplace.nu/admin/api/campaigns", {
      id: data.id,
      action: {
        discountPercentage: data.discountPercentage,
        typeName: data.actionTypeName,
      },
      conditions: [
        {
          voucherCodes: {
            [data.code]: data.numberOfUsages,
          },
          typeName: data.conditionsTypeName,
        },
      ],
      name: data.name,
      priority: 0,
      isActive: false,
      startDate: data.startDate,
      endDate: data.endDate,
      currencies: [
        {
          id: data.currencies.id,
          code: data.currencies.code,
        },
      ],
      countries: [
        {
          id: data.countries.id,
          code: data.countries.code,
          name: data.countries.name,
        },
      ],
    });

    dispatch({
      type: ActionTypes.POST_CAMPAIGN,
    });
  };
};

export const reorderCampaigns = (data) => {
  return async (dispatch) => {
    console.log(data);
    await axios.post(
      "http://eleikoab.test.workplace.nu/admin/api/campaigns/sort",
      {
        data,
      }
    );

    dispatch({
      type: ActionTypes.REORDER_CAMPAIGNS,
    });
  };
};

export const getCountries = () => {
  return async (dispatch) => {
    const countries = await axios.get(
      "http://eleikoab.test.workplace.nu/admin/api/countries"
    );
    dispatch({
      type: ActionTypes.GET_COUNTRIES,
      payload: countries.data,
    });
  };
};

export const getCurrencies = () => {
  return async (dispatch) => {
    const currencies = await axios.get(
      "http://eleikoab.test.workplace.nu/admin/api/currencies"
    );
    dispatch({
      type: ActionTypes.GET_CURRENCIES,
      payload: currencies.data,
    });
  };
};
export const getConditionTypes = () => {
  return async (dispatch) => {
    const conditionTypes = await axios.get(
      "http://eleikoab.test.workplace.nu/admin/api/campaigns/conditiontypes"
    );
    dispatch({
      type: ActionTypes.GET_CONDITION_TYPES,
      payload: conditionTypes.data,
    });
  };
};
export const getActionTypes = () => {
  return async (dispatch) => {
    const actionTypes = await axios.get(
      "http://eleikoab.test.workplace.nu/admin/api/campaigns/actiontypes"
    );
    dispatch({
      type: ActionTypes.GET_ACTION_TYPES,
      payload: actionTypes.data,
    });
  };
};
