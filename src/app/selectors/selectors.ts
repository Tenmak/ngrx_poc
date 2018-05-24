import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

import { People } from '../people/people';
import { Model } from '../people/people.component';

export const partyModel = () => {
  return (state: Store<any>) => state
    .pipe(
      map(([people, filter]) => {
        return {
          total: people.length,
          people: people.filter(filter),
          attending: people.filter(person => person.attending).length,
          guests: people.reduce((acc, curr) => acc + curr.guests, 0)
        };
      })
    );
};

export const attendees = () => {
  return (state: Store<Model>) => state
    .pipe(
      map(s => s.people),
      distinctUntilChanged()
    );
};

export const percentAttending = () => {
  return (state: Store<any>) => state
    .pipe(
      // built on previous selectors
      attendees(),
      map(p => {
        const totalAttending = p.filter(person => person.attending).length;
        const total = p.length;
        return total > 0 ? (totalAttending / total) * 100 : 0;
      })
    );
};
