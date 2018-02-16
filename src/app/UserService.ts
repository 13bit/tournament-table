import {LocalStorageService} from 'angular-2-local-storage';
import {UUID} from 'angular2-uuid';
import {User} from './models/User';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  constructor(private localStorageService: LocalStorageService) {
  }

  save(user: User): Observable<User> {
    const create = (user: User) => {
      user.id = UUID.UUID();
      const tasks = this.localStorageService.get('users') as User[] || [];
      tasks.push(user);
      this.localStorageService.set('users', tasks);

      return Observable.create((observer) => {
        observer.next(user);
        observer.complete();
      });
    };

    const update = (user: User) => {
      const tasks = this.localStorageService.get('users') as User[] || [];
      tasks.map((item: User) => {
        if (item.id === user.id) {
          item.name = user.name;
        }
      });

      this.localStorageService.set('users', tasks);

      return Observable.create((observer) => {
        observer.next(user);
        observer.complete();
      });
    };

    return user.id ? update(user) : create(user);
  }

  getById(id: string): Observable<User> {
    const tasks = this.localStorageService.get('users') as User[] || [];

    return Observable.create((observer) => {
      observer.next(tasks.find((item) => item.id === id));
      observer.complete();
    });
  }

  get(): Observable<User[]> {
    return Observable.create((observer) => {
      observer.next(this.localStorageService.get('users') as User[] || []);
      observer.complete();
    });
  }

  remove(user: User): Observable<any> {
    const users = this.localStorageService.get('users') as User[] || [];
    this.localStorageService.set('users', users.filter((item) => item.id !== user.id));

    return Observable.create((observer) => {
      observer.next();
      observer.complete();
    });
  }

}
