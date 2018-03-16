import {Component, OnInit} from '@angular/core';
import {UserService} from '../../UserService';
import {User} from '../../models/User';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: User[];
  scrollHeightMax: number;
  scrollHeightCurrent: number = 0;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
    setInterval(() => this.getUsers(), 15000);
    setInterval(() => this.scroll(), 40 * 1000);
  }

  getUsers() {
    this.userService.get()
      .subscribe((users) => {
        this.users = users.sort((a, b) => b.bonus - a.bonus);
        this.scrollHeightMax = (users.length + 1) * 67;
      });
  }

  scroll() {
    const step = 465;
    if (this.scrollHeightCurrent >= this.scrollHeightMax) {
      this.scrollHeightCurrent = step;
      //TODO @@@dr when chrome in electron 65+ can use window.scrollBy({
      //TODO @@@dr   top: -this.scrollHeightMax,
      //TODO @@@dr     behavior: 'smooth'
      // TODO @@@dr });
      window.scrollBy(0, -this.scrollHeightMax);
    } else {
      this.scrollHeightCurrent += step;
      window.scrollBy(0, step);
    }

  }
}
