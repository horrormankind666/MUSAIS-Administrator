/*
=============================================
Author      : <ยุทธภูมิ ตวันนา>
Create date : <๑๒/๑๑/๒๕๖๒>
Modify date : <๑๒/๑๑/๒๕๖๒>
Description : <รวมรวบฟังก์ชั่นใช้งานทั่วไปของระบบ>
=============================================
*/

'use strict';

import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  lang: string = 'th';
    
  constructor(
    private titleService: Title,
    private translateService: TranslateService      
  ) { }

  //ฟังก์ชั่นสำหรับกำหนดภาษาที่่ต้องการ
  //โดยมีพารามิเตอร์ดังนี้
  //1. lang รับค่าภาษาที่ต้องการ
  setDefaultLang(lang?: string) {
    this.lang = (!lang ? this.lang : lang);

    this.translateService.setDefaultLang(this.lang);
    this.translateService.use(this.lang);
          
    this.translateService.get('systemName').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  };

  //ฟังก์ชั่นสำหรับซุ่มเลขสี
  getRandomColor() {
    let color = Math.floor(0x1000000 * Math.random()).toString(16);
    
    return ('#' + ('000000' + color).slice(-6)).toUpperCase();
  };

  //ฟังก์ชั่นสำหรับแสดงปีปัจจุบัน
  getCurrentYear() {
    return new Date().getFullYear() + 543;
  } 
}
