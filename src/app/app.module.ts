import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'apply-visa',
    pathMatch: 'full',
  },
 
  {
    path: 'apply-visa',
    loadChildren: () => import('./apply-visa/apply-visa.module').then(m => m.ApplyVisaModule)
  }
]


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
