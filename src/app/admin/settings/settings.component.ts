import {Component, OnInit} from '@angular/core';
import {UserService} from '../../UserService';
import {BonusSettingsService} from '../../BonusSettingsService';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private userService: UserService,
              private bonusSettingsService: BonusSettingsService) {
  }

  ngOnInit() {
  }

  reset(): void {
    this.userService.removeAll()
      .subscribe(() => {
        this.bonusSettingsService.remove()
          .subscribe(() => console.log('Deleted'));
      });
  }

}
