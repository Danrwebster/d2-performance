import { Directive, ElementRef, Inject, Input, Renderer, AfterContentInit } from '@angular/core';

@Directive({
	selector: '[appFocus]'
})

export class FocusDirective implements AfterContentInit {
	@Input() focus: boolean;

	constructor(
		@Inject(ElementRef) private element: ElementRef,
		public renderer: Renderer
	) { }

	ngAfterContentInit() {
		this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
		this.element.nativeElement.focus();
	}

}
