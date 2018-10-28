import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  initSvg(){
    const t = this;

    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    for (const iterator of arr) {
      //console.log('it', iterator)
      const name = `${iterator}_5`;
      const path = `assets/img/baseline-star_rate-black-18/${name}.svg`
      const san = t.domSanitizer.bypassSecurityTrustResourceUrl(path)
      t.matIconRegistry.addSvgIcon(name,san);
    }

  }
}
