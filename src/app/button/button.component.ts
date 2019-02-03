import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input() href: string;
  @Input() round: boolean;
  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }

}
