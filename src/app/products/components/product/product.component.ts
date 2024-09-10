import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() data: any = {};
  @Output() productSelected = new EventEmitter();
  addBtn: Boolean = false;
  count: number = 0;
  constructor() {}
  add() {
    this.productSelected.emit({item:this.data, itemNum:this.count});
  }
}
