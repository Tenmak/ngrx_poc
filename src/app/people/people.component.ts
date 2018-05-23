import { Component } from '@angular/core';
import { People } from './people';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

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
  public people: Observable<People> = null;
  private subscription: Subscription;

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

    /*
      Observable of people, utilzing the async pipe
      in our templates this will be subscribed to, with
      new values being dispayed in our template.
      Unsubscribe wil be called automatically when component
      is disposed.
    */
    this.people = _store.select('people');
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

  // /*
  //   if you do not use async pipe and create manual subscriptions
  //   always remember to unsubscribe in ngOnDestroy
  // */
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
