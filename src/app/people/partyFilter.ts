import { Action } from '@ngrx/store';
import {
  SHOW_ATTENDING,
  SHOW_ALL,
  SHOW_WITH_GUESTS
} from '../actions/actions';
import { People } from '../people/people';

/**
 * Party Filter reducer
 * @param state Slice of a person from the store
 * @param action The action that updates this slice
 */
// return appropriate function depending on selected filter
export const partyFilterReducer = (state = (person: People) => person, action: Action) => {
  switch (action.type) {
    case SHOW_ALL:
      return (person: People) => person;
    case SHOW_ATTENDING:
      return (person: People) => person.attending;
    case SHOW_WITH_GUESTS:
      return (person: People) => person.guests;
    // always have default return of previous state when action is not relevant
    default:
      return state;
  }
};
