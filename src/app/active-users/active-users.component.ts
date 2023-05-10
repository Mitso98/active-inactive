import { Component } from '@angular/core';
import { User } from '../models/User.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  usersList!: User[];
  errorMessage: any;
  constructor(public users: UsersService) {}
  ngOnInit(): void {
    this.usersList = this.users.activeUsers;
    this.users.activeUsersListUpdate.subscribe({
      next: (user: User[]) => (this.usersList = user),
      error: (error: any) => (this.errorMessage = error),
    });
  }
}
