import { Component, OnInit } from '@angular/core';
import { freeSet } from '@coreui/icons/js/free';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public visible = false;
  icons = freeSet;

  Toggle() {
    this.visible = !this.visible;
  }

  handleChange(event: any) {
    this.visible = event;
  }
}
