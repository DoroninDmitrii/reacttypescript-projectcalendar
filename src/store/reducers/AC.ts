import { AuthActionCreators } from "./authReducer/actionCreatorAuth";
import { EventActionCreator } from "./eventReducer/actionCreatorEvent";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreator
}
