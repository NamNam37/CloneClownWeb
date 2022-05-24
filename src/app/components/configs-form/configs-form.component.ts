import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configs-form',
  templateUrl: './configs-form.component.html',
  styleUrls: ['./configs-form.component.scss']
})
export class ConfigsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public visible = false;

  Toggle() {
    this.visible = !this.visible;
  }

  handleChange(event: any) {
    this.visible = event;
  }

}
