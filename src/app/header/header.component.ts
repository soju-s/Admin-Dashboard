import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

//event
@Output() toogle=new EventEmitter()

  //function for menu button clicked
  MenuButtonClicked(){
this.toogle.emit()
//when dispatch is occur resize screen
setTimeout(()=>{
  window.dispatchEvent(
    new Event('resize')
  )
},100);

  }

}
