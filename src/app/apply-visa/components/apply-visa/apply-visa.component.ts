import { setTheme } from './../../reducers/app-apply-visa/actions';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy  } from '@angular/core'

import { ApplyVisaModuleType, selectEntryRequirements, selectTravelInfo } from '../../reducers/index';
import { EntryRequirementsService } from '../../services/entry-requirements.service';
import * as entryRequirementsSelectors from '../../reducers/entry-requirements/selectors';
import { updateCitizenShip, updateLanguage, updateItineraries } from '../../reducers/travel-info/actions';
import { Observable, Subscription } from 'rxjs';
import * as travelInfoSelectors from '../../reducers/travel-info/selectors';
import { checkEntryRequirements } from '../../reducers/entry-requirements/actions';
import { loadLocalization } from '../../reducers/localization/actions';
import { selectTheme } from '../../reducers/app-apply-visa/selectors';
@Component({
  selector: 'app-apply-visa',
  templateUrl: './apply-visa.component.html',
  styleUrls: ['./apply-visa.component.scss']
})
export class ApplyVisaComponent implements OnInit, OnDestroy {
  public languages = [
    'ar',
    'de',
    'dk',
    'is',
    'fi',
    'en',
  ]
  public citizenships = [
    'CA',
    'AU',
    'JP'
  ]
  public itineraryList = [
    {
      name:  'VN-HAN US-234 JP-234',
      value: [
        {
          "destinationCountry": "JP",
          "arrivalAirportCode": "234",
          "arrivalDate": "2019-09-03T00:00:00.000Z",
          "arrivalTime": "15:22"
        },
        {
          "destinationCountry": "US",
          "arrivalAirportCode": "234",
          "arrivalDate": "2019-09-03T00:00:00.000Z",
          "arrivalTime": "15:22"
        },
        {
          "destinationCountry": "VN",
          "arrivalAirportCode": "HAN",
          "arrivalDate": "2019-09-03T00:00:00.000Z",
          "arrivalTime": "15:22"
        }
      ]
    },
    {
      name: 'TR-',
      value: [
        {
          "destinationCountry": "TR",
          "arrivalAirportCode": "",
          "arrivalDate": "2019-09-03T00:00:00.000Z",
          "arrivalTime": "15:22"
        }
      ]
    },
    {
      name: 'EG-ABZ IN-AMD JP-234',
      value:  [
        {
          "destinationCountry": "EG",
          "arrivalAirportCode": "ABZ",
          "arrivalDate": "2019-09-03T00:00:00.000Z",
          "arrivalTime": "15:22"
        },
        {
          "destinationCountry": "IN",
          "arrivalAirportCode": "AMD",
          "arrivalDate": "2019-09-03T00:00:00.000Z",
          "arrivalTime": "15:22"
        },
        {
          "destinationCountry": "JP",
          "arrivalAirportCode": "234",
          "arrivalDate": "2019-09-03T00:00:00.000Z",
          "arrivalTime": "15:22"
        }
      ]
    }
  ]
 
  public subscriptions: Subscription[] = [];
  public themeName: string;
  constructor(
      private _entryRequirementsService: EntryRequirementsService,
      public store: Store<ApplyVisaModuleType>
    ) {}

  ngOnInit() {
    const subscription = this.store
      .pipe(select(travelInfoSelectors.selectFieldForEntryRequirements))
      .subscribe(state => {
        this.store.dispatch(checkEntryRequirements(state));
      })

    const languageSub = this.store
    .pipe(select(travelInfoSelectors.selectLanaugage))
    .subscribe(state => {
      this.store.dispatch(loadLocalization({language: state}));
    })

    const themeSub = this.store
    .pipe(select(selectTheme))
    .subscribe(state => {
      this.themeName = state
    })
    this.subscriptions = [subscription, languageSub, themeSub]
  }
  ngOnDestroy() {
    this.subscriptions.map(sub => sub.unsubscribe());
  }
  public updateLanguage(langauge: string) {
    this.store.dispatch(updateLanguage({langauge}));
  }

  public updateItinerary(itinerary) {

    this.store.dispatch(updateItineraries({newItineraries: itinerary.value}));
  }
  public updateCitizenship(citizenship: string) {
    this.store.dispatch(updateCitizenShip({citizenship}));
  }

  public setTheme(theme: string) {
    this.store.dispatch(setTheme({themeName: theme}))
  }
}
