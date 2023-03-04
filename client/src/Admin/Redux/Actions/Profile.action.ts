import { ProfileTypo } from "../../Constants/ProfileTypo";
import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT_SUCCESS,
} from "../Types/Profile.types";
import { AppDispatch } from "../store";

export const AdminLogin = () => (dispatch: AppDispatch) => {
  dispatch({ type: ADMIN_LOGIN_SUCCESS });
};

export const AdminLogout = () => (dispatch: AppDispatch) => {
  dispatch({ type: ADMIN_LOGOUT_SUCCESS });
};
