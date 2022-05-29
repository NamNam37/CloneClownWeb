import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { freeSet } from '@coreui/icons/js/free';
import { UsersService } from 'src/app/services/users.service';
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

  constructor(private service: UsersService) { }

  ngOnInit(): void {
  }
  icons = freeSet;

  public edit(user: Users): void {
    this.selected.emit(user);
  }

  public RemoveAt(index: number) {
    this.service.delete(this.users[index].id);
<<<<<<< HEAD
<<<<<<< HEAD
    this.users.splice(index, 1);
=======
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
=======
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
  }
}
