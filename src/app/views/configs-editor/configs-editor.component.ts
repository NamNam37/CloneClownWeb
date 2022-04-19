import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configs-editor',
  templateUrl: './configs-editor.component.html',
  styleUrls: ['./configs-editor.component.scss']
})
export class ConfigsEditorComponent implements OnInit {

  constructor() { }
  value = 50;
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
