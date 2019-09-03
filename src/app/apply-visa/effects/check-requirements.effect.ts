import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { Action, Store, select } from '@ngrx/store'

import { ApplyVisaModuleType } from '../reducers';
import * as entryRequirementsActions from '../reducers/entry-requirements/actions';
import { EntryRequirementsService } from '../services/entryRequirements';


@Injectable()
export class CheckRequirements {
  @Effect()
  checkRequirements: Observable<Action> = 
    this.actions$.pipe(
      ofType(entryRequirementsActions.CHECK_ENTRY_REQUIREMENTS),
      switchMap((action) => {
        return this.entryRequirementsService
        .checkRequirements(action)
        .pipe(
          map(data => {
           return entryRequirementsActions.checkEntryRequirementsSuccess({requirements: data});
          }))
      }),
    )

    constructor(
      private entryRequirementsService: EntryRequirementsService,
      private actions$: Actions,
      private store: Store<ApplyVisaModuleType>
    ) {}
}