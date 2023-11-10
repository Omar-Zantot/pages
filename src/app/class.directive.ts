import { Directive, ElementRef, Input } from '@angular/core';
/**
 * use appClass as property
 * */
@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  // @Input() backgroundColor!: string;
  constructor(private element: ElementRef) {
    // NEVER DO THIS !!!
    // setTimeout(() => {
    //   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // }, 50);
  }
  // @Input() set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  // @Input('appClass') set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  /**
   * custom attribute directive
   * */
  @Input('appClass') set className(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}

/**
 **- Make our class directive apply a background color to
 **  whatever element we apply the directive to.
 * ? how we can actually access the element that we apply the directive to.
 * ? how we can change some properties on it.
 *
 */

/**
 * const directive = new ClassDirective();
 * directive.backgroundColor = 'red';
 * */
