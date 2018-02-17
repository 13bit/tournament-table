import {LocalStorageService} from 'angular-2-local-storage';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {BonusSettings} from './models/BonusSettings';

@Injectable()
export class BonusSettingsService {
  collection = 'bonusSettings';

  constructor(private localStorageService: LocalStorageService) {
  }

  save(bonusSettings: BonusSettings): Observable<BonusSettings> {
    this.localStorageService.set(this.collection, bonusSettings);

    return Observable.create((observer) => {
      observer.next(bonusSettings);
      observer.complete();
    });
  }

  get(): Observable<BonusSettings> {
    return Observable.create((observer) => {
      observer.next(this.localStorageService.get(this.collection) as BonusSettings);
      observer.complete();
    });
  }

  remove(): Observable<any> {
    this.localStorageService.remove(this.collection);

    return Observable.create((observer) => {
      observer.next();
      observer.complete();
    });
  }

}
