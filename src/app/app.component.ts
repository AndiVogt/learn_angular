import { Component } from '@angular/core'
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appp works, woop';
  name = 'ninja is runnin';
  ninja = {
    name: "yoshi",
    belt: "black",
  };
  

yell(e: any){
  alert("i am yelling")
  console.log(e)
}

}
