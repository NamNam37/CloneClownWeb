import { Component, OnInit } from '@angular/core';
import { freeSet } from '@coreui/icons/js/free';
import { Users } from 'src/app/models/users.model';
import { Router } from "@angular/router";
import { UsersService } from '../../services/users.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Observable<Users[]>;
  constructor(private router: Router,
    private service: UsersService) { }

  ngOnInit(): void {
    this.users = this.service.findAll()
  }

  icons = freeSet;

  public edit(user: Users): void {
    this.router.navigate(['users-editor', user.id]);
  }
}
