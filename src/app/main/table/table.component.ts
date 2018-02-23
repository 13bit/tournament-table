import { Component, OnInit } from '@angular/core';
import {UserService} from '../../UserService';
import {User} from '../../models/User';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    setInterval(() => this.getUsers(), 15000);
  }

  getUsers() {
    this.userService.get()
      .subscribe((users) => {
        this.users = users.sort((a, b) => b.bonus - a.bonus);
      });
  }

  scroll() {
    setInterval(() => {
      window.scrollBy({
        top: 25,
        behavior: 'smooth'
      });
    }, 1000);

  }
}
