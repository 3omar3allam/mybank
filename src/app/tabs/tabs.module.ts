import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    TabsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    TabsRoutingModule,
    HttpClientModule,
  ],
})
export class TabsModule { }
