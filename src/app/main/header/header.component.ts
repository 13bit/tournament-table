import {Component, OnInit} from '@angular/core';
import {BonusSettingsService} from '../../BonusSettingsService';
import {BonusSettings} from '../../models/BonusSettings';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  settings: BonusSettings;
  timeLeftDays: any;
  timeLeftHours: any;
  timerIsReady: boolean = false;

  constructor(private bonusSettingsService: BonusSettingsService) {
  }

  ngOnInit() {
    this.getBonusSettings();

    setInterval(() => this.getBonusSettings(), 15000);
  }

  getBonusSettings() {
    this.bonusSettingsService.get()
      .subscribe((settings) => {
        if (!settings) {
          this.settings = new BonusSettings();
          this.settings.bonus = 0;
          this.settings.endDate = new Date();
          return;
        }

        this.settings = settings;
        setInterval(() => this.ticTac(), 1000);
      });
  }

  ticTac(): void {
    const endTime = moment(this.settings.endDate);
    const diff = moment().diff(endTime);
    let daysHeader = 'день';
    const pad = (x) => {
      return x < 10 ? '0' + x : x;
    };
    let [days, hours, minutes, seconds] = [0, pad(0), pad(0), pad(0)];

    if (diff < 0) {
      const leftTimeDuration = moment.duration(diff);

      [days, hours, minutes, seconds] = [
        Math.abs(leftTimeDuration.days()),
        pad(Math.abs(leftTimeDuration.hours())),
        pad(Math.abs(leftTimeDuration.minutes())),
        pad(Math.abs(leftTimeDuration.seconds()))
      ];
    }

    if (days > 1 && days <= 4) {
      daysHeader = 'дня';
    } else if (days > 4 || days === 0) {
      daysHeader = 'дней';
    }

    this.timeLeftDays = `${days} ${daysHeader}`;
    this.timeLeftHours = [hours, minutes, seconds].join(':');
    this.timerIsReady = true;
  }


}
