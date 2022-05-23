import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-configs-editor',
  templateUrl: './configs-editor.component.html',
  styleUrls: ['./configs-editor.component.scss']
})
export class ConfigsEditorComponent implements OnInit {

  public user: Users;

  public form: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: UsersService) {
  }

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
