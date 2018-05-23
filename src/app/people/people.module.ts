import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { PeopleComponent } from './people.component';
import { PartyStatsComponent } from './party-stats/party-stats.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PersonListComponent } from './person-list/person-list.component';

import { peopleReducer } from './people';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // we can set a table name 'people' and match it to the reducer
    StoreModule.forRoot({ people: peopleReducer })
  ],
  declarations: [
    PeopleComponent,
    PartyStatsComponent,
    PersonInputComponent,
    PersonListComponent
  ],
  exports: [
    PeopleComponent,
    PartyStatsComponent,
    PersonInputComponent,
    PersonListComponent
  ],
  providers: [],
})
export class PeopleModule { }
