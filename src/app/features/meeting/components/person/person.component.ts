import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from '../../types/person';
import { MeetingService } from '../../services/meeting.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: IPerson | null = null;
  @Input() isSpeaking: boolean = false;
  public isLoading: boolean = false;

  constructor(private meetingService: MeetingService) {
  }

  ngOnInit(): void {
  }

  public onImageClick(): void {
    this.isLoading = true;
    this.meetingService
      .getCatsImage()
      .pipe(
        take(1)
      )
      .subscribe((path) => {
        this.isLoading = false;
        this.person = {...this.person, imagePath: path} as IPerson;
      });
  }

}
