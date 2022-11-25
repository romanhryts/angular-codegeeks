import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-option-submitter',
  templateUrl: './menu-option-submitter.component.html',
  styleUrls: ['./menu-option-submitter.component.css']
})
export class MenuOptionSubmitterComponent implements OnInit {
  @Input() menuItem: string = '';
  @Output() closeSubmitter = new EventEmitter<void>();
  @Output() submitSubmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseSubmitter(): void {
    this.closeSubmitter.emit();
  }

  onSubmitSubmitter(): void {
    this.submitSubmitter.emit();
  }

}
