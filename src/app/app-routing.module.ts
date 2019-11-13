/*
=============================================
Author      : <ยุทธภูมิ ตวันนา>
Create date : <๑๒/๑๑/๒๕๖๒>
Modify date : <๑๒/๑๑/๒๕๖๒>
Description : <รวมรวบฟังก์ชั่นใช้งานสำหรับจัดการ router>
=============================================
*/

'use strict';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },      
      {
        path: '**',
        component: AppComponent
      }        
    ])
  ], 
  exports: [RouterModule]
})

export class AppRoutingModule { }
