/**
 * Person reducer
 * @param state Slice of whole people from store
 * @param action The action that updates this slice
 */
export const peopleReducer = (state: People[] = [], action: any) => {
  switch (action.type) {
    case 'ADD_PERSON':
      const basePerson: Partial<People> = {
        id: action.payload.id,
        name: action.payload.name
      };
      return [
        ...state,
        Object.assign({}, createNewPerson(basePerson))
      ];
    case 'REMOVE_PERSON':
      console.log(action.payload);
      return state.filter(person => person.id !== action.payload);
    // to shorten our case statements, delegate detail updates to second private reducer
    case 'ADD_GUEST':
      return state.map(person => detailPersonReducer(person, action));
    case 'REMOVE_GUEST':
      return state.map(person => detailPersonReducer(person, action));
    case 'TOGGLE_ATTENDING':
      return state.map(person => detailPersonReducer(person, action));
    // always have default return of previous state when action is not relevant
    default:
      return state;
  }
};

/**
 * Detail reducer for a given person
 * @param state a given person
 * @param action the action that updates the guests of a person
 */
const detailPersonReducer = (state: Partial<People> = {}, action: any) => {
  switch (action.type) {
    case 'ADD_GUEST':
      if (state.id === action.payload) {
        return Object.assign({}, state, { guests: state.guests + 1 } as Partial<People>);
      }
      return state;
    case 'REMOVE_GUEST':
      if (state.id === action.payload) {
        return Object.assign({}, state, { guests: state.guests - 1 } as Partial<People>);
      }
      return state;
    case 'TOGGLE_ATTENDING':
      if (state.id === action.payload) {
        return Object.assign({}, state, { attending: !state.attending } as Partial<People>);
      }
      return state;
    // always have default return of previous state when action is not relevant
    default:
      return state;
  }
};

export interface People {
  id: number;
  name: string;
  guests: number;
  attending: boolean;
}

const createNewPerson = (person: Partial<People>) => {
  return { id: person.id, name: person.name, guests: 0, attending: false } as People;
};

