import { Injectable } from '@angular/core';
import querystring from 'querystring'
import { forkJoin, empty } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class EntryRequirementsService {
  public baseUrl = `${environment.apiUrl}entry-requirements`
  constructor(private http: HttpClient) { }
  checkRequirements(travelInfo) {
    const { citizenship, language, itinerary, affiliateId } = travelInfo
    if(itinerary && itinerary.length > 0) {
      const requestMap = itinerary.map(it => {
        const reqUrl = this.buildEntryRequirementsUrl({
          citizenship,
          language,
          destination: it.destinationCountry,
          affiliateId,
          key: environment.apiKey,
         })
         if(reqUrl) return this.http.get<any>(this.baseUrl + reqUrl)
      })
      return forkJoin(requestMap)
    }
    return empty()
    .pipe(
      map(result => {
        return result
      })
    )
  }
  buildEntryRequirementsUrl(payloadObj): string {
    let requestUrl = ''
    try {
      requestUrl = '?' + querystring.stringify(payloadObj)
    } catch(e) {
      console.log(e)
    }
    return requestUrl
  }
}