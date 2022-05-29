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
  ModalModule,
  DropdownModule
} from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';

import { ConfigsFormComponent } from './configs-form.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { FtpModalComponent } from '../ftp-modal/ftp-modal.component';
=======
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
=======
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad



@NgModule({
  declarations: [
<<<<<<< HEAD
<<<<<<< HEAD
    ConfigsFormComponent, FtpModalComponent
=======
    ConfigsFormComponent
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
=======
    ConfigsFormComponent
>>>>>>> 0f4644a06c3e510b7188d447cd700eed002be1ad
  ],
  imports: [
    ModalModule,
    CardModule,
    DropdownModule,
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
  ], exports: [
    ConfigsFormComponent
  ]
})
export class ConfigsFormModule { }
