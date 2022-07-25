import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../store";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";


export const EventActionCreator = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload: payload}),
  setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload: payload}),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const guests = await
    } catch(e) {
      console.log(e)
    }
  }
}
