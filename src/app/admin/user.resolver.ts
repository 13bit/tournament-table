import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {User} from '../models/User';
import {UserService} from '../UserService';

@Injectable()
export class UserResolve implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getById(route.paramMap.get('id'));
  }
}
