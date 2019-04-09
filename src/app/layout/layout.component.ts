import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, AnimateTimings } from '@angular/animations';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
  animations: [
    trigger('page', [
      transition('void => *', [
        style({ opacity: '0' }),
        animate('400ms ease-in')
      ]),
      transition('* => void', [
        style({ opacity: '1' }),
        animate('100ms ease-out')
      ])
    ])
  ]
})
export class LayoutComponent implements OnInit {
  currentNav = 'home';
  totalNavs: string[] = [
    'home',
    'meetup',
    'aboutus'
  ];
  currentPosition = 0;
  pending = false;
  touch = {
    startY: 0
  };

  constructor() {
  }

  ngOnInit() {
    document.addEventListener('wheel', this.scroll.bind(this), true);
    document.addEventListener('touchstart', this.touchstart.bind(this), true);
  }

  ngOnDestroy() {
    document.removeEventListener('wheel', this.scroll.bind(this), true);
    document.addEventListener('touchstart', this.touchstart.bind(this), true);
  }

  changeNav(nav: string) {
    this.currentNav = nav;
  }

  nextNav() {
    const currentIndex = this.totalNavs.indexOf(this.currentNav);
    const { length } = this.totalNavs;
    return this.totalNavs[(currentIndex + 1) % length];
  }

  prevNav() {
    const currentIndex = this.totalNavs.indexOf(this.currentNav);
    const { length } = this.totalNavs;
    return this.totalNavs[currentIndex ? (currentIndex - 1) : length - 1];
  }

  handleScroll(deltaY) {
    if (Math.abs(deltaY) < 30) { return; }
    this.pending = true;

    if (deltaY > 0) {
      const next = this.nextNav();
      this.changeNav(next);
    } else if (deltaY < 0) {
      const next = this.prevNav();
      this.changeNav(next);
    }

    // Reduce the flicker effect
    setTimeout(() => {
      this.pending = false;
    }, 400);
  }

  scroll(event) {
    if (this.pending) { return; }
    this.handleScroll(event.deltaY);
  }

  touchstart(event) {
    if (this.pending) { return; }
    const touches = event.touches;
    if (touches && touches.length) {
      this.touch.startY = touches[0].pageY;
      document.addEventListener('touchmove', this.touchmove.bind(this));
    }
  }

  touchmove(event) {
    const touches = event.touches;
    if (touches && touches.length) {
      const deltaY = this.touch.startY - touches[0].pageY;
      this.handleScroll(deltaY);
      document.removeEventListener('touchmove', this.touchmove);
    }
  }
}

