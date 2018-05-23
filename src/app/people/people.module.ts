import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { PeopleComponent } from './people.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PersonListComponent } from './person-list/person-list.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { PartyStatsComponent } from './party-stats/party-stats.component';

import { peopleReducer } from './people';
import { partyFilterReducer } from './partyFilter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // we can set a table name 'people' and match it to the reducer
    StoreModule.forRoot({ people: peopleReducer, partyFilter: partyFilterReducer })
  ],
  declarations: [
    PeopleComponent,
    PersonInputComponent,
    PersonListComponent,
    FilterSelectComponent,
    PartyStatsComponent
  ],
  exports: [
    PeopleComponent,
    PersonInputComponent,
    PersonListComponent,
    FilterSelectComponent,
    PartyStatsComponent
  ],
  providers: [],
})
export class PeopleModule { }
