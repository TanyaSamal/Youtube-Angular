import { Directive, HostBinding, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[colorBorder]'
})
export class ColorBorderDirective implements OnInit{

    @Input() publishedDate = '';
    private borderBottom = 'red';
    
    constructor(){}

    ngOnInit() {

    }

    @HostBinding("style.borderBottomColor") get getBorderBottomColor(){
        const period = this.getTimePeriod();
        if (period < 604800000) {
            this.borderBottom = "blue";
        } else if (period > 604800000 && period < 2678400000) {
            this.borderBottom = "green";
        } else {
            this.borderBottom = "red";
        }
        return this.borderBottom;
    }

    private getTimePeriod(): number {
        const now = Date.now();
        const publishedAt = Date.parse(this.publishedDate);
        return now - publishedAt;
    }

}