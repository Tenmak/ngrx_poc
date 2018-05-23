import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { PeopleComponent } from './people.component';
import { PartyStatsComponent } from './party-stats/party-stats.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PersonListComponent } from './person-list/person-list.component';

import { peopleReducer } from './people';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ peopleReducer })
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
