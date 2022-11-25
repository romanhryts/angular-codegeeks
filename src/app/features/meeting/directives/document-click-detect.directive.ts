import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDocumentClickDetect]'
})
export class DocumentClickDetectDirective {
  @Output() closeMenuEvent = new EventEmitter<void>();

  constructor(private elRef: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!(event.target === this.elRef.nativeElement)) {
      this.closeMenuEvent.emit();
    }
  }

}
