import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SectionsComponent } from './sections.component';
import { AppointmentComponent } from './appbarbershopappointmentappapi/appointment.component';
import { BarberComponent } from './appbarbershopappointmentappapi/barber.component';
import { ClientComponent } from './appbarbershopappointmentappapi/client.component';

@NgModule({
  declarations: [
    SectionsComponent,
  AppointmentComponent,
  BarberComponent,
  ClientComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    JwBootstrapSwitchNg2Module
  ],
  exports:[ SectionsComponent ]
})
export class SectionsModule { }
