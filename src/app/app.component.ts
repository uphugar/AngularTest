import { Component } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'testserver',content:'just a test'}];
  
  onServerAdded(serverData:{servername:string, serverContent:string}) {
     this.serverElements.push({
      type: 'server',
      name: serverData.servername,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData:{servername:string, serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name: blueprintData.servername, 
      content: blueprintData.serverContent});
  }
  onChangeFirst(){
    console.log(' onChangesfirst is called');
    this.serverElements[0].name="changing name";
    // console.log(this.serverElements);
  }
  onDestroyFirst()
  {
    this.serverElements.splice(0,1);
  }
}
