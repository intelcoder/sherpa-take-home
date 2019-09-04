
import { Store, select } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyVisaModuleType } from './../../reducers/index';
import { EntryRequirementType, EntryRequirementListType } from '../../reducers/entry-requirements/types';
import { selectEntryRequirementList } from '../../reducers/entry-requirements/selectors';
import { selectEntryRequirements, selectLocalization } from '../../reducers/index';

@Component({
  selector: 'app-requirement-card',
  templateUrl: './requirement-card.component.html',
  styleUrls: ['./requirement-card.component.css']
})
export class RequirementCardComponent implements OnInit {
  requirements: any;
  isFetching: boolean;
  constructor(public store: Store<ApplyVisaModuleType>) {
    this.store.pipe(select(selectEntryRequirements)).subscribe(entryRequirementState => {
      const { entryRequirements, isFetching } = entryRequirementState
      this.requirements = entryRequirements
      this.isFetching = isFetching
    })
    this.store.pipe(select(selectLocalization)).subscribe(data => {
      console.log(data)
    })

   }


  ngOnInit() {
  }

}
