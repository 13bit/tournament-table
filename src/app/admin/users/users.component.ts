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
  _users: User[];
  search: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  onSearch(input) {
    this.users = this._users.filter(({name}) => name.toLowerCase().match(input.toLowerCase()));
  }

  getUsers(): void {
    this.userService.get()
      .subscribe((users) => {
        this._users = users;
        this.users = this._users;
      });
  }

  removeUser(user: User): void {
    this.userService.remove(user)
      .subscribe(() => this.getUsers());
  }

}
