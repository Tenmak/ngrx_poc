import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { Effects } from './.effects';

describe('Service', () => {
  let actions$: Observable<any>;
  let effects: Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Effects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(Effects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});