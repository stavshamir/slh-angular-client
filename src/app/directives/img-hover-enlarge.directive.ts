import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appImgHoverEnlarge]'
})
export class ImgHoverEnlargeDirective implements OnInit {
  @Input() defaultSize: string;
  @Input() hoverSize: string;
  @HostBinding('style.maxHeight') maxHeight: string;

  ngOnInit(): void {
    this.maxHeight = this.defaultSize;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.maxHeight = this.hoverSize;
  }
  @HostListener('mouseleave') mouseLeave() {
    this.maxHeight = this.defaultSize;
  }
}
