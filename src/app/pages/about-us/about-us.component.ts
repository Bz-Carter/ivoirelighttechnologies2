import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  elements: any[] = [];

  constructor(@Inject(DOCUMENT) private document: any) { }

  @HostListener('window: scroll', [])
  onScroll() {
    this.elements.forEach((element) => {
      const scrollTop = this.document.body.scrollTop;
      const elementOffset = element.getBoundingClientRect().top;
      const distance = (elementOffset - scrollTop);
      const clientHeight = this.document.documentElement.clientHeight;
      const breakPoint = clientHeight * 0.9;

      if (distance > breakPoint) {
        element.classList.add('more-padding');
      }

      if (distance < breakPoint) {
        element.classList.remove('more-padding');
      }
    });
  }

  ngOnInit() {
    this.elements = Array.from(this.document.documentElement.querySelectorAll('.timeline-animated li'));
  }

}
