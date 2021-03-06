import { HeaderModule } from "@/components/header/header.module";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ZXingScannerModule } from "@zxing/ngx-scanner";
import { BadgeComponent } from './badge/badge.component';
import { FinishComponent } from './finish/finish.component';
import { IdentificationComponent } from './identification/identification.component';
import { MerchComponent } from './merch/merch.component';
import { StartComponent } from './start/start.component';
import { TicketComponent } from './ticket/ticket.component';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    StartComponent,
    TicketComponent,
    IdentificationComponent,
    BadgeComponent,
    FinishComponent,
    MerchComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    HeaderModule,
    ZXingScannerModule,
    FormsModule
  ]
})
export class WelcomeModule {
}
