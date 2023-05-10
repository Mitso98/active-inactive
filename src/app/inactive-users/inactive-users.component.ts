import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  usersList!: User[];
  errorMessage: any;
  constructor(public users: UsersService) {}
  ngOnInit(): void {
    this.usersList = this.users.inActiveUsers;
    this.users.deActiveUsersListUpdate.subscribe({
      next: (user: User[]) => (this.usersList = user),
      error: (error: any) => (this.errorMessage = error),
    });
  }
}
