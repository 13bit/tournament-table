import {Component, OnInit} from '@angular/core';
import {UserService} from '../../UserService';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.get()
      .subscribe((users) => this.users = users);
  }

  removeUser(user: User): void {
    this.userService.remove(user)
      .subscribe(() => this.getUsers());
  }

}
