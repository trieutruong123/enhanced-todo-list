export type Member = {
  id: string;
  name: string;
  img: string;
};

export type MemberStore = {
  members: Array<Member>;
};

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum MemberActionTypes {
  GET_ALL_MEMBERS = "GET_ALL_MEMBES",
  RECEIVE_ALL_MEMBERS = "RECEIVE_ALL_MEMBERS",
}

export interface MemberPayload {
  [MemberActionTypes.GET_ALL_MEMBERS]: {};
  [MemberActionTypes.RECEIVE_ALL_MEMBERS]: {
    value: Array<Member>;
  };
}

export type MemberActions =
  ActionMap<MemberPayload>[keyof ActionMap<MemberPayload>];
