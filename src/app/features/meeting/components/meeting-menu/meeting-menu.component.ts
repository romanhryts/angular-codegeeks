import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMeetingMenuItem } from '../../types/meeting-menu-item';

@Component({
  selector: 'app-meeting-menu',
  templateUrl: './meeting-menu.component.html',
  styleUrls: ['./meeting-menu.component.css']
})
export class MeetingMenuComponent implements OnInit {
  @Output() menuOptionClick = new EventEmitter<string>();

  public headerMenuItems: IMeetingMenuItem[] = [
    { icon: 'border_color', text: 'Дошка для конференцій' },
    { icon: 'radio_button_checked', text: 'Записувати зустріч' },
  ];

  public mainMenuItems: IMeetingMenuItem[] = [
    { icon: 'dashboard', text: 'Змінити макет' },
    { icon: 'fullscreen', text: 'Повноекранний режим' },
    { icon: 'auto_awesome', text: 'Застосувати візуальні ефекти' },
    { icon: 'closed_caption', text: 'Увімкнути субтитри' },
    { icon: 'phone_forwarded', text: 'Використовувати телефон для передачі звуку' }
  ];

  public footerMenuItems: IMeetingMenuItem[] = [
    { icon: 'sms_failed', text: 'Повідомити про проблему' },
    { icon: 'report', text: 'Повідомити про порушення' },
    { icon: 'query_stats', text: 'Вирішення проблем і довідка' },
    { icon: 'settings', text: 'Налаштування' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onMenuOptionClick(event: EventTarget | null): void {
    const span = event as HTMLSpanElement;
    const value = span.innerText;
    this.menuOptionClick.emit(value);
  }

}
