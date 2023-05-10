import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: UsersService;
  counter: number = 0;
  constructor(users: UsersService) {
    this.users = users;
  }
  ngOnInit(): void {
    this.users.counterUpdated.subscribe({
      next: (counter: number) => (this.counter = counter),
    });
  }
}
