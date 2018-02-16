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
  userId: string;
  user: User|any;
  private sub: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user']
      ? this.route.snapshot.data['user']
      : new User();
  }

  save(): void {
     this.userService.save(this.user)
      .subscribe((user) => {
        console.log('user  >>', user);
      });
  }

}
