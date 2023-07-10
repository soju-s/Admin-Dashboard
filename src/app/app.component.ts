import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';



  sidebar:boolean=true


  sidebarToogle(){
    // if(this.sidebar==true){
    //   this.sidebar=false
    // }
    // else{
    //   this.sidebar=true
    // }
this.sidebar=!this.sidebar
  }
}
