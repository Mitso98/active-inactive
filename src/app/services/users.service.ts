import { Injectable, EventEmitter } from '@angular/core';

import { User } from '../models/User.model';
import { count } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  activeUsersListUpdate = new EventEmitter<User[]>();
  deActiveUsersListUpdate = new EventEmitter<User[]>();
  counterUpdated = new EventEmitter<number>();
  static counter = 0;
  activeUsers = [
    new User(1, 'Jack', true),
    new User(2, 'Johns', true),
    new User(3, 'Joe', true),
    new User(4, 'Joey', true),
    new User(5, 'Johnson', true),
  ];

  inActiveUsers: User[] = [];

  activate(id: number) {
    const user = this.inActiveUsers.find((user) => user.myId === id);
    if (!user!.isActive) {
      user!.isActive = !user!.isActive;
      this.inActiveUsers = this.inActiveUsers.filter(
        (user) => user.myId !== id
      );
      this.activeUsers.push(user as User);
      this.activeUsersListUpdate.emit(this.activeUsers);
      this.deActiveUsersListUpdate.emit(this.inActiveUsers);
      UsersService.counter++;
      this.counterUpdated.emit(UsersService.counter);
    }
  }

  deActivate(id: number) {
    const user = this.activeUsers.find((user) => user.myId === id);
    if (user!.isActive) {
      user!.isActive = !user!.isActive;
      this.activeUsers = this.activeUsers.filter((user) => user.myId !== id);
      this.inActiveUsers.push(user as User);
      this.activeUsersListUpdate.emit(this.activeUsers);
      this.deActiveUsersListUpdate.emit(this.inActiveUsers);
      UsersService.counter++;
      this.counterUpdated.emit(UsersService.counter);
    }
  }

  constructor() {}
}
