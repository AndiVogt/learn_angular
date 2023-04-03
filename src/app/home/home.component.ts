import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeTitle = "Welcome to the homepage...";
  
  @Input() ninja: any;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e: any){
    this.onYell.emit(e);
  }
}
