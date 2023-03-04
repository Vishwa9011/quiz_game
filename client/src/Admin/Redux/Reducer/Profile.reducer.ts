import { ProfileTypo } from "../../Constants/ProfileTypo";
import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT_SUCCESS,
} from "../Types/Profile.types";

interface State {
  loading: boolean;
  error: boolean;
  profile: ProfileTypo[] | [];
  adminAuth: boolean;
  adminId: number | string;
}

const initialState: State = {
  loading: false,
  error: false,
  profile: [],
  adminAuth: localStorage.getItem("adminId") ? true : false,
  adminId: localStorage.getItem("adminId") || 0,
};

type Action = {
  type: string;
  payload?: any;
};

export const profileReducer = (
  state: State = initialState,
  { type, payload }: Action
): State => {
  switch (type) {
    case ADMIN_LOGIN_SUCCESS: {
      return {
        ...state,
        adminAuth: true,
        adminId: localStorage.getItem("adminId") || 0,
      };
    }
    case ADMIN_LOGOUT_SUCCESS: {
      return {
        ...state,
        adminAuth: false,
        adminId: 0,
      };
    }
    default: {
      return state;
    }
  }
};
