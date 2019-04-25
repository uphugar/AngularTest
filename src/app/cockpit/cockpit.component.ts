import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @Output() serverCreated= new EventEmitter<{servername:string, serverContent:string}>();
  //alias for output decorator. this alias will be used in other component.
  @Output('bpCreated') blueprintCreated=new EventEmitter<{servername:string, serverContent:string}>();
  @ViewChild('serverContentInput') serverContentInput1: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      servername:serverNameInput.value,
      serverContent:this.serverContentInput1.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      servername:serverNameInput.value,
      serverContent:this.serverContentInput1.nativeElement.value});
  }
}
