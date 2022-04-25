import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { freeSet } from '@coreui/icons/js/free';
import { Users } from "../../models/users.model";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Input()
  public users: Users[] = [];

  @Output()
  public selected: EventEmitter<Users> = new EventEmitter<Users>();

  constructor() { }

  ngOnInit(): void {
  }
  icons = freeSet;
}
