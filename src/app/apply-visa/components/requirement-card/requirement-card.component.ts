
import { Store, select } from '@ngrx/store';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApplyVisaModuleType } from './../../reducers/index';
import { EntryRequirementType, EntryRequirementListType } from '../../reducers/entry-requirements/types';
import { selectEntryRequirementList } from '../../reducers/entry-requirements/selectors';
import { selectEntryRequirements, selectLocalization } from '../../reducers/index';
import { CountryType } from '../../reducers/localization/types';

interface MyObject {
  [key: string]: CountryType | {};
}

@Component({
  selector: 'app-requirement-card',
  templateUrl: './requirement-card.component.html',
  styleUrls: ['./requirement-card.component.scss']
})
export class RequirementCardComponent implements OnInit, OnDestroy {
  requirements: any;
  countriesMap: any = {};
  isFetching: boolean;
  localization: any;
  entryRequirementSub: Subscription;
  localizationSub: Subscription;

  constructor(public store: Store<ApplyVisaModuleType>) {
    this.entryRequirementSub = this.store
    .pipe(select(selectEntryRequirements))
    .subscribe(entryRequirementState => {
      const { entryRequirements, isFetching } = entryRequirementState;
      this.requirements = entryRequirements;
      this.isFetching = isFetching;
    });

    this.localizationSub = this.store
    .pipe(select(selectLocalization))
    .subscribe(localizationState => {
      if(localizationState.countriesMap) {
        const { localization, countriesMap } = localizationState;
        this.countriesMap = countriesMap;
        this.localization = localization;
      }
    });
   }

  ngOnInit() {}
  ngOnDestroy() {
    this.entryRequirementSub.unsubscribe();
    this.localizationSub.unsubscribe();
  }

}
