import { CheckRequirements } from './effects/check-requirements.effect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequirementCardComponent } from './components/requirement-card/requirement-card.component';
import { StoreModule } from '@ngrx/store';
import * as reducers from './reducers/index';
import { ApplyVisaComponent } from './components/apply-visa/apply-visa.component'
import { EffectsModule } from '@ngrx/effects';
import { EntryRequirementsService } from './services/entryRequirements';
import { ApplyVisaRouting } from './apply-routing.module';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [RequirementCardComponent, ApplyVisaComponent],
  imports: [
    StoreModule.forFeature('applyVisaModule', reducers.reducers),
    ApplyVisaRouting,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    EffectsModule.forRoot([CheckRequirements]),
  ]
})
export class ApplyVisaModule { }
