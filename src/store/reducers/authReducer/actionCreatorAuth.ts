import axios from "axios";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../store";
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";


export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
  setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: payload}),
  setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: payload}),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true))
      const mockUsers = await axios.get('./users.json')
      console.log(mockUsers);
    } catch (e) {
      dispatch(AuthActionCreators.setError('The error is happend!'))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {

    } catch (e) {
      
    }
  }

}

