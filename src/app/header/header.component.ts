import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() nav: string;
  @Output() changeNav = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  // Todo
  // Better to make it work with other platform than browser
  scroll(id: string) {
    // const element = document.getElementById(id) as HTMLElement;
    // element.scrollIntoView({ behavior: 'smooth',  block: 'start'});
    this.changeNav.emit(id);
  }

  active(isNav) {
    console.log('IS nav: ', isNav, this.nav);
    return isNav === this.nav;
  }
}
