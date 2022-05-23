import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Users } from 'src/app/models/users.model';

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
    let id = +this.route.snapshot.params['id'];

    this.service.findById(id).subscribe(user => {
      this.user = user;
      this.form = this.createForm(this.user);
    });
  }

  private createForm(user: User): FormGroup {
    return this.fb.group({
      name: [ user.name, Validators.required ],
      surname: [ user.surname, Validators.required ],
      age: [ user.age, Validators.required ],
    });
  }

  public save(): void {
    Object.assign(this.user, this.form.value);

    this.service.save(this.user).subscribe(user => {
      this.router.navigate([ 'users' ])
    });
  }
  public visible = false;

  Toggle() {
    this.visible = !this.visible;
  }

  handleChange(event: any) {
    this.visible = event;
  }

}
