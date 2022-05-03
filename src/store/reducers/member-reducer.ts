import { MemberActions, MemberActionTypes, MemberStore } from "types";

const initialState: MemberStore = {
  members: [],
};

const memberReducer = (state = initialState, action: MemberActions) => {
  switch (action.type) {
    case MemberActionTypes.RECEIVE_ALL_MEMBERS:
      return { ...state, members: action.payload.value };
    default:
      return state;
  }
};

export default memberReducer;
