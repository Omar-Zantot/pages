import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

/**
 * ^--> [TemplateRef and ViewContainerRef] :
 *   We're going to use these to customize the arguments that are accepted into our constructor.
 * @viewContainerRef :
 *  - is a reference to the element that we applied our directive to.
 *  - is a kind of custom version of our element that gives us the ability to very easily
 *    add in more elements or remove elements or essentially render some other templates inside there
 *  - is kind of a reference to this wrapping element, it's a version of it that makes it really easy to work
 *    with the contents of it, hence the name view container Ref because it's containing some other elements
 * @TemplateRef :
 *  - is a reference to whatever elements are placed inside of the element that we applied our directive to.
 * */

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  /**
   *context object :
   * We can add in some different properties inside of here that will make some different values
   * accessible inside of our template through our directive.
   * */
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
      });
    }
  }
}
