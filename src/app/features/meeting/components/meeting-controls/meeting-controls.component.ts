import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-meeting-controls',
  templateUrl: './meeting-controls.component.html',
  styleUrls: ['./meeting-controls.component.css']
})
export class MeetingControlsComponent implements OnInit {
  @Output() goToMenu = new EventEmitter<string>();
  public showMore: boolean = false;
  public activeMenuOption: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleShowMoreVisibility(): void {
    this.showMore = !this.showMore;
  }

  public setMenuOption(value: string): void {
    this.activeMenuOption = value;
  }

  public onCloseSubmitter(): void {
    this.activeMenuOption = null;
  }

  public onGoToMenu(): void {
    this.goToMenu.emit(this.activeMenuOption as string);
    this.activeMenuOption = null;
  }
}
