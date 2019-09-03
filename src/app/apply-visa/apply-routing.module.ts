
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplyVisaComponent } from './components/apply-visa/apply-visa.component';

const routes: Routes = [
  {
    path: '',
    component: ApplyVisaComponent,
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ApplyVisaRouting {}