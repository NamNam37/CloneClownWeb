import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  ModalModule
} from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { WidgetsModule } from '../widgets/widgets.module';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';


@NgModule({
  declarations: [LogsComponent],
  imports: [
    CommonModule,
    LogsRoutingModule,
    ModalModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
  ]
})
export class LogsModule { }
