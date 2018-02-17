import {Component, OnInit} from '@angular/core';
import {BsLocaleService} from 'ngx-bootstrap';
import {ruLocale} from 'ngx-bootstrap/locale';
import {defineLocale} from 'ngx-bootstrap/chronos';
import {BonusSettingsService} from '../../BonusSettingsService';
import {BonusSettings} from '../../models/BonusSettings';
import {Router} from '@angular/router';

defineLocale('ru', ruLocale);

@Component({
  selector: 'app-bonus-settings',
  templateUrl: './bonus-settings.component.html',
  styleUrls: ['./bonus-settings.component.css']
})
export class BonusSettingsComponent implements OnInit {
  minDate = new Date();
  bonusSettings: BonusSettings;

  constructor(private _localeService: BsLocaleService,
              private bonusSettingsService: BonusSettingsService,
              private router: Router) {
  }

  ngOnInit() {
    this._localeService.use('ru');

    this.bonusSettingsService.get()
      .subscribe((bonusSettings) => {
        if (bonusSettings && bonusSettings.bonus) {
          bonusSettings.endDate = new Date(bonusSettings.endDate);
          this.bonusSettings = bonusSettings;
        } else {
          this.bonusSettings = new BonusSettings();
          this.bonusSettings.endDate = new Date();
        }
      });
  }

  save(): void {
    this.bonusSettingsService.save(this.bonusSettings)
      .subscribe((result) => {
        console.log('res >>>', result);
        this.router.navigateByUrl('/admin/users');
      });
  }

  reset(): void {
    this.bonusSettingsService.remove()
      .subscribe(() => {
        this.bonusSettings = new BonusSettings();
        this.bonusSettings.endDate = new Date();
      });
  }

}
