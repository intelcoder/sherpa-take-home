import { Injectable } from '@angular/core';

import { forkJoin, empty } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  public baseUrl = `https://sdk-staging.joinsherpa.io/cdn/localization/`
  constructor(private http: HttpClient) { }
  fetchLocalizationData({language}) {
    if(language) {
      return this.http.get<any>(`${this.baseUrl}${language.toLowerCase()}.json`);
    }
    return empty()
    .pipe(
      map(result => {
        return result;
      })
    );
  }

};