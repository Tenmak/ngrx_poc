import { Component } from '@angular/core';
import { People } from './people';
import { Store } from '@ngrx/store';
import { Subscription, Observable, pipe, OperatorFunction } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { attendees, partyModel, percentAttending } from '../selectors/selectors';

import {
  ADD_GUEST,
  TOGGLE_ATTENDING,
  REMOVE_PERSON,
  REMOVE_GUEST,
  ADD_PERSON
} from '../actions/actions';

import { idGen } from 'src/app/core/utils';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  // public people: People = null;
  // private subscription: Subscription;
  // public people$: Observable<People[]> = null;
  // public filter$: Observable<any> = null;
  // public attending$: Observable<People[]> = null;
  // public guests$: Observable<any> = null;

  public model: Observable<Model>;
  public percentAttendance: Observable<any>;

  constructor(
    private _store: Store<any>
  ) {
    // /*
    //   demonstrating use without the async pipe,
    //   we will explore the async pipe in the next lesson
    // */
    // this.subscription = this._store
    //   // Name must match reducer name (as a table)
    //   .select('people')
    //   .subscribe((people: People) => {
    //     this.people = people;
    //   });

    // /*
    //   Observable of people, utilizing the async pipe
    //   in our templates this will be subscribed to, with
    //   new values being dispayed in our template.
    //   Unsubscribe wil be called automatically when component
    //   is disposed.
    // */
    // this.people$ = _store.select('people');
    // this.filter$ = _store.select('partyFilter');
    // this.attending$ = this.people$.pipe(map(partyList => partyList.filter(person => person.attending)));
    // this.guests$ = this.people$.pipe(
    //   map(partyList => partyList
    //     .map(person => person.guests)
    //     .reduce((acc, curr) => acc + curr, 0))
    // );

    // this.model = combineLatest(
    //   _store.select('people'),
    //   _store.select('partyFilter'),
    //   (people: People[], partyFilter: any) => {
    //     return {
    //       total: people.length,
    //       people: people.filter(partyFilter),
    //       attending: people.filter(person => person.attending).length,
    //       guests: people.reduce((acc, curr) => acc + curr.guests, 0)
    //     };
    //   });

    this.model = combineLatest(
      _store.select('people'),
      _store.select('partyFilter')
    )
      // extracting party model to selector
      .pipe(partyModel());

    // for demonstration on combining selectors
    this.percentAttendance = _store.pipe(percentAttending());
  }

  // all state-changing actions get dispatched to and handled by reducers
  addPerson(name: string) {
    this._store.dispatch({ type: ADD_PERSON, payload: { id: idGen(), name: name } });
  }

  addGuest(id: number) {
    this._store.dispatch({ type: ADD_GUEST, payload: id });
  }

  removeGuest(id: number) {
    this._store.dispatch({ type: REMOVE_GUEST, payload: id });
  }

  removePerson(id: number) {
    this._store.dispatch({ type: REMOVE_PERSON, payload: id });
  }

  toggleAttending(id: number) {
    this._store.dispatch({ type: TOGGLE_ATTENDING, payload: id });
  }

  filterPeople(action: string) {
    this._store.dispatch({ type: action });
  }

  // /*
  //   if you do not use async pipe and create manual subscriptions
  //   always remember to unsubscribe in ngOnDestroy
  // */
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}

export interface Model {
  total: number;
  people: People[];
  attending: number;
  guests: number;
}
