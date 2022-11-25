import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingComponent } from './components/meeting/meeting.component';
import { MeetingService } from './services/meeting.service';
import { PeopleComponent } from './components/people/people.component';
import { MeetingControlsComponent } from './components/meeting-controls/meeting-controls.component';
import { PersonComponent } from './components/person/person.component';
import { MeetingMenuComponent } from './components/meeting-menu/meeting-menu.component';
import { DocumentClickDetectDirective } from './directives/document-click-detect.directive';
import { MenuOptionSubmitterComponent } from './components/menu-option-submitter/menu-option-submitter.component';


@NgModule({
  declarations: [
    MeetingComponent,
    PeopleComponent,
    MeetingControlsComponent,
    PersonComponent,
    MeetingMenuComponent,
    DocumentClickDetectDirective,
    MenuOptionSubmitterComponent
  ],
  imports: [
    CommonModule,
    MeetingRoutingModule
  ],
  providers: [
    MeetingService
  ]
})
export class MeetingModule { }
