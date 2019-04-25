import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  ,encapsulation: ViewEncapsulation.Emulated   // by default its Emulated. however there are options like None, Native, ShadowDom
  // Emulated will apply stylesheet changes to only this component
  // None will apply stylesheet changes of this component to outside of this file to other components too.
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck , AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // pass alias in the decoroator, this alias name will be property name outside this component.
  @Input('srvElement') element: {name:string, content:string, type: string};
  @Input () name: string;
  @ViewChild('header') header: ElementRef;
  @ContentChild('paragraphContent') paragraph: ElementRef; 
  constructor() { 
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges');
    console.log(changes);
  }
  //below code is all the lifecylce hooks for component init or after changes. few of them are very useful.
  ngOnInit() {
    console.log('ngOnInit called');
  }
  ngDoCheck(){
    console.log('ngDoCheck is called');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit is called');
    console.log("paragraph : "+this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked is called!');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log("heading: "+this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
