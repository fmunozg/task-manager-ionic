import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskNewPageRoutingModule } from './task-new-routing.module';

import { TaskNewPage } from './task-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskNewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TaskNewPage]
})
export class TaskNewPageModule {}
