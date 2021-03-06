import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { FormBuilder, FormGroup } from '@angular/forms';
=======
import { FormGroup } from '@angular/forms';
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
=======
import { FormGroup } from '@angular/forms';
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
import { Configs } from 'src/app/models/configs.model';
import { DestF } from 'src/app/models/destF.model';
import { SourceF } from 'src/app/models/sourceF.model';
import { ConfigsService } from 'src/app/services/configs.service';

@Component({
  selector: 'app-configs-form',
  templateUrl: './configs-form.component.html',
  styleUrls: ['./configs-form.component.scss']
})
export class ConfigsFormComponent implements OnInit {

  public cron1: string = '';
  public cron2: string = '';
  public cron3: string = '';
  public cron4: string = '';
  public cron5: string = '';

  @Input()
  public form: FormGroup;

  @Input()
  public config: Configs;

  public submit(): void {
    this.config.schedule = this.cron1 + ' ' + this.cron2 + ' ' + this.cron3 + ' ' + this.cron4 + ' ' + this.cron5
    this.config.configName = this.form.get('configName')?.value
    this.config.isZIP = this.form.get('isZIP')?.value
    this.config.packageCount = this.form.get('packageCount')?.value
    this.config.backupCount = this.form.get('backupCount')?.value
    this.service.save(this.config).subscribe()
  }
<<<<<<< HEAD
<<<<<<< HEAD
  changeConfigName(name: string): void {
    this.config.configName = name;
  }
=======
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
=======
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad

  public onChange1(value: string): void {
    this.cron1 = value
  }
  public onChange2(value: string): void {
    this.cron2 = value
  }
  public onChange3(value: string): void {
    this.cron3 = value
  }
  public onChange4(value: string): void {
    this.cron4 = value
  }
  public onChange5(value: string): void {
    this.cron5 = value
  }
  public setFull(): void {
    this.config.type = 'full'
<<<<<<< HEAD
<<<<<<< HEAD
    this.fullAct = true;
    this.diffAct = false;
    this.incrAct = false;
  }
  public setDiff(): void {
    this.config.type = 'differencial'
    this.fullAct = false;
    this.diffAct = true;
    this.incrAct = false;
  }
  public setIncr(): void {
    this.config.type = 'incremental'
    this.fullAct = false;
    this.diffAct = false;
    this.incrAct = true;
=======
=======
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
  }
  public setDiff(): void {
    this.config.type = 'differencial'
  }
  public setIncr(): void {
    this.config.type = 'incremental'
<<<<<<< HEAD
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
=======
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
  }
  public AddSource(path: string): void {
    let source = new SourceF();
    source.path = path;
    source.configID = this.config.id;
    this.config.sources.push(source);
  }
  public AddDest(path: string): void {
    let dest = new DestF();
    dest.path = path;
    dest.configID = this.config.id;
    dest.type = 'local';
    this.config.dests.push(dest);
  }
<<<<<<< HEAD
<<<<<<< HEAD
  constructor(private service: ConfigsService,
              private fb: FormBuilder) { }
=======
  constructor(private service: ConfigsService) { }
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
=======
  constructor(private service: ConfigsService) { }
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad

  public RemoveSourceAt(index: number): void {
    this.config.sources.splice(index, 1);
  }
<<<<<<< HEAD
<<<<<<< HEAD
  public RemoveDestById(id: number): void {
    let toDelete = this.config.dests.find(a => id == a.id);
    this.config.dests = this.config.dests.filter(a => a != toDelete);
  }

  fullAct: boolean = false;
  diffAct: boolean = false;
  incrAct: boolean = false;

  ngOnInit(): void {
    let schedule = this.config.schedule.split(' ')
    this.cron1 = schedule[0]
    this.cron2 = schedule[1]
    this.cron3 = schedule[2]
    this.cron4 = schedule[3]
    this.cron5 = schedule[4]

    if (this.config.type == "full") {
      this.fullAct = true;
    }
    if (this.config.type == "differencial") {
      this.diffAct = true;
    }
    if (this.config.type == "incremental") {
      this.incrAct = true;
    }
    
  }


  public visible: boolean = false;
  Toggle() {
    this.visible = true;
  }

  public exitFtp(): void {
    this.visible = false;
  }
=======
=======
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
  public RemoveDestAt(index: number): void {
    this.config.dests.splice(index, 1);
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

<<<<<<< HEAD
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
=======
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
}
