import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../UserService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User|any;
  showAddBonusForm = false;
  bonus: number = null;
  bonusSum: number;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user']
      ? this.route.snapshot.data['user']
      : new User();

    this.bonusSum = this.calculateBonus() || 0;
  }

  save(): void {
     this.userService.save(this.user)
      .subscribe((user) => {
        console.log('user  >>', user);
      });
  }

  showAddBonusInput(): void {
    this.showAddBonusForm = true;
  }

  addBonus(): void {
    this.bonus = this.bonus * 1;

    if (this.bonus > 0 && Number.isInteger(this.bonus)) {
      this.user.bonusHistory.push(this.bonus);
      this.bonus = null;
      this.showAddBonusForm = false;
      this.bonusSum = this.calculateBonus();
    }
  }

  cancelAddBonus(): void {
    this.bonus = null;
    this.showAddBonusForm = false;
  }

  calculateBonus(): number {
    return this.user.bonusHistory.reduce((acc, bonus) => acc + bonus, 0);
  }

  removeHistoryItem(index): void {
    this.user.bonusHistory.splice(index, 1);
    this.bonusSum = this.calculateBonus();
  }

}
