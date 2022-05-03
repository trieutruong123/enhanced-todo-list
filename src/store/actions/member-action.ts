import { api } from "services";
import { MemberActionTypes } from "types";

export const getAllMembers = () => async (dispatch: any, getState: any) => {
  const intialData = await api.requestMembers();
  const payload = { value: intialData };
  return dispatch({
    type: MemberActionTypes.RECEIVE_ALL_MEMBERS,
    payload,
  });
};
