import {Directive,HostBinding,HostListener,Renderer} from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirection{
    constructor(private el: ElementRef,private renderer : Renderer){

    }
 @HostBinding('class.show') isOpen= false;
 @HostListener('click') toggleOpen(){
    this.renderer.setElementClass(this.el.nativeElement.children[1], 'show', this.isOpen);
     this.isOpen = !this.isOpen;
 }
}