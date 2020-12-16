import { getMarket, getMarkets, getProducts } from "../../actions/actions";

export const GET_MARKETS_STARTED = 'GET_MARKETS_STARTED'
export const GET_MARKETS_SUCCESS = 'GET_MARKETS_SUCCESS'
export const GET_MARKETS_ERROR = 'GET_MARKETS_ERROR'

export const GET_MARKET_STARTED = 'GET_MARKET_STARTED'
export const GET_MARKET_SUCCESS= 'GET_MARKET_SUCCESS'
export const GET_MARKET_ERROR = 'GET_MARKET_ERROR'

export const GET_PRODUCTS_STARTED = 'GET_PRODUCTS_STARTED'
export const GET_PRODUCTS_SUCCESS= 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR'
const marketsActions = {
getMarkets: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_MARKETS_STARTED,
      });
      let response = await getMarkets()
      dispatch({
        type: GET_MARKETS_SUCCESS,
        payload: {
            data: response,
          },
      });
    } catch (error) {
      dispatch({
        type: GET_MARKETS_ERROR,
      });
    }
},

getMarket: (placeId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_MARKET_STARTED,
      });
      let response = await getMarket(placeId)
      dispatch({
        type: GET_MARKET_SUCCESS,
        payload: {
            data: response,
          },
      });
    } catch (error) {
      dispatch({
        type: GET_MARKET_ERROR,
      });
    }
},
getProducts: () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCTS_STARTED,
    });
    let response = await getProducts()
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: {
          data: response,
        },
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
    });
  }
}
}
export  {marketsActions};
