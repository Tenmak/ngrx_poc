import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { PeopleComponent } from './people.component';
import { peopleReducer } from './people';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ peopleReducer })
  ],
  declarations: [
    PeopleComponent
  ],
  exports: [
    PeopleComponent
  ],
  providers: [],
})
export class PeopleModule { }
