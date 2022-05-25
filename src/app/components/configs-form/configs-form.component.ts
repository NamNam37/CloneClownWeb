import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  }
  public setDiff(): void {
    this.config.type = 'differencial'
  }
  public setIncr(): void {
    this.config.type = 'incremental'
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
  constructor(private service: ConfigsService) { }

  public RemoveSourceAt(index: number): void {
    this.config.sources.splice(index, 1);
  }
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

}
