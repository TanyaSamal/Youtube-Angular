import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[colorBorder]'
})

export class ColorBorderDirective {

    private borderBottom: string = 'red';
    @Input() public publishedDate: string = '';

    constructor() { }

    private getTimePeriod(): number {
        const now: number = Date.now();
        const publishedAt: number = Date.parse(this.publishedDate);
        return now - publishedAt;
    }

    @HostBinding('style.borderBottomColor') public get getBorderBottomColor(): string {
        const period: number = this.getTimePeriod();
        if (period < 604800000) {
            this.borderBottom = 'blue';
        } else if (period > 604800000 && period < 2678400000) {
            this.borderBottom = 'green';
        } else {
            this.borderBottom = 'red';
        }
        return this.borderBottom;
    }

}
