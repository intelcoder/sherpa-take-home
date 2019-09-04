import { ApplyVisaLocalization } from './effects/localization.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { CheckRequirements } from './effects/check-requirements.effect';
import { RequirementCardComponent } from './components/requirement-card/requirement-card.component';
import * as reducers from './reducers/index';
import { ApplyVisaComponent } from './components/apply-visa/apply-visa.component'
import { EntryRequirementsService } from './services/entry-requirements.service';
import { ApplyVisaRouting } from './apply-routing.module';



@NgModule({
  declarations: [RequirementCardComponent, ApplyVisaComponent],
  imports: [
    StoreModule.forFeature('applyVisaModule', reducers.reducers),
    ApplyVisaRouting,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    EffectsModule.forRoot([CheckRequirements, ApplyVisaLocalization]),
  ]
})
export class ApplyVisaModule { }
