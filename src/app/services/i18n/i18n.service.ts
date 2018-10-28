import { Injectable } from '@angular/core';
import { isoLangs } from 'src/app/classes_interfaces_constants/constants';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor() { }

  lang(countryCode: string): string {
    if (isoLangs && countryCode){
      return isoLangs[countryCode].name || countryCode
    } else {
      return countryCode
    }
  }

}
