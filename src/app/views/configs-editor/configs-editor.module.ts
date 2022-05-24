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
import { WidgetsModule } from '../widgets/widgets.module';

import { ConfigsEditorRoutingModule } from './configs-editor-routing.module';
import { ConfigsEditorComponent } from './configs-editor.component';
import { ConfigsFormModule } from '../../components/configs-form/configs-form.module';

@NgModule({
  declarations: [ConfigsEditorComponent],
  imports: [
    ConfigsFormModule,
    ConfigsEditorRoutingModule,
    ModalModule,
    CardModule,
    NavModule,
    DropdownModule,
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
export class ConfigsEditorModule { }
