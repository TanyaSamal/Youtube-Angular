import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive ({
    selector: '[tsToggle]'
})

export class ToggleDirective {

 @HostListener ('click') public onClick(): void {
        document.querySelector('.filter').classList.toggle('visible');
    }
}
