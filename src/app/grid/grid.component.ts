import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit {
  @Input() direction: string;
  @Input() align: string;

  constructor() { }

  ngOnInit() {
  }

  styles() {
    if (!this.align) {
      return {};
    }
    return {
      'align-items': this.align
    };
  }
}
