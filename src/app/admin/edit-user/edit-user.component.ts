import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../UserService';
import {ActivatedRoute, Router} from '@angular/router';
import {Bonus} from '../../models/Bonus';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User | any;
  showAddBonusForm = false;
  bonus: Bonus = null;
  bonusSum: number;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

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
        this.router.navigateByUrl('/admin/users');
      });
  }

  showAddBonusInput(): void {
    this.showAddBonusForm = true;
    this.bonus = new Bonus();
  }

  addBonus(): void {
    this.bonus.value = this.bonus.value * 1;
    this.bonus.createdAt = Date.now();

    if (this.bonus.value > 0 && Number.isInteger(this.bonus.value)) {
      this.user.bonusHistory.push(this.bonus);
      this.bonus = null;
      this.showAddBonusForm = false;
      this.bonusSum = this.calculateBonus();
      this.user.bonus = this.bonusSum;
    }
  }

  cancelAddBonus(): void {
    this.bonus = null;
    this.showAddBonusForm = false;
  }

  calculateBonus(): number {
    return this.user.bonusHistory.reduce((acc, bonus) => acc + bonus.value, 0);
  }

  removeHistoryItem(index): void {
    this.user.bonusHistory.splice(index, 1);
    this.bonusSum = this.calculateBonus();
    this.user.bonus = this.bonusSum;
  }

}
