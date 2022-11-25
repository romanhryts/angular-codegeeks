import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from '../../types/person';
import { MeetingService } from '../../services/meeting.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people$: Observable<IPerson[]> = this.meetingService.getPeople();

  constructor(private meetingService: MeetingService) { }

  ngOnInit(): void {
  }

}
