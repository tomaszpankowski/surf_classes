import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { EventsS1Component } from './events-s1/events-s1.component';
import { EventsS2Component } from './events-s2/events-s2.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventsS1Component,
    EventsS2Component
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
