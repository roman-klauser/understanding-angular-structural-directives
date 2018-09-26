import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[carousel]'
})
export class CarouselDirective {

  @Input('carouselFrom')
  images ;

  @Input('carouselAutoplay')
  autoplay: 'on' | 'off';

  @Input('carouselWithDelay')
  delay: number;

  @Input() set carousel(condition) {
    this.viewContainer.createEmbeddedView(this.templateRef, {
      $implicit: 12132
    });
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }




}
