import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { Action, Store, select } from '@ngrx/store'

import * as localizationActions from '../reducers/localization/actions';
import { LocalizationType } from '../reducers/localization/types';
import { LocalizationService } from '../services/localization.service';

@Injectable()
export class ApplyVisaLocalization {
  @Effect()
  loadOnLanguageUpdate: Observable<Action> =
    this.actions$.pipe(
      ofType(localizationActions.loadLocalization),
      switchMap((action) => {
        return this.entryRequirementsService
        .fetchLocalizationData(action)
        .pipe(
          map(data => {
            const countries = data.countries || {}
            const countriesMap = countries.reduce((acc, country) => {
                acc[country.alpha_2] = country;
                return acc;
            }, {});
            return localizationActions.loadLocalizationSuccess({...data, countriesMap});
          }))
      }),
    )

    constructor(
      private entryRequirementsService: LocalizationService,
      private actions$: Actions,
      private store: Store<LocalizationType>
    ) {}
}