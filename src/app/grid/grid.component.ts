import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-grid',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
    }
  `]
})
export class GridComponent implements OnInit {
  @Input() direction: string;
  @Input() justify: string;
  @Input() align: string;
  @Input() width: string;
  @Input() passClass: string;

  @HostBinding('style.flex-direction') get flexDirection() {
    return this.direction || 'row';
  }
  @HostBinding('style.justify-content') get justifyContent() {
    return this.justify || 'flex-start';
  }
  @HostBinding('style.align-items') get alignItems() {
    return this.align || 'flex-start';
  }
  @HostBinding('style.width') get widthVal() {
    return this.width;
  }

  constructor() { }

  ngOnInit() {
  }
}
