import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() data: any[] = [];
  @Input() title: string = '';
  @Output() selectedValue = new EventEmitter();

  constructor() {}
  detectData(event: any){
this.selectedValue.emit(event);

  }
}
