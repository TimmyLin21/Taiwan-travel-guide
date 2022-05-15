import { useReducer, useCallback } from "react";
import { useDispatch } from "react-redux";
import { loadingActions } from "../store/loading";
import { paginationActions } from "../store/pagination";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  } else if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  } else if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
};

const useHttp = (
  requestFunction,
  startWithPending = false,
  needPagination = false
) => {
  const reduxDispatch = useDispatch();
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });
  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
        if (needPagination) {
          responseData.length < 9
            ? reduxDispatch(paginationActions.delHasMore())
            : console.log('No more');
        }
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction, needPagination, reduxDispatch]
  );
  reduxDispatch(loadingActions.setStatus({ status: httpState.status }));
  return { sendRequest, ...httpState };
};

export default useHttp;
