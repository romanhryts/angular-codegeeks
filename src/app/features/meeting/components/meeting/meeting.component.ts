import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  public openedMenuType: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public showOpenedMenu(value: string): void {
    this.openedMenuType = value;
  }

}
