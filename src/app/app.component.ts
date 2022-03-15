import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n1:string = "";
  n2:string = "";
  risultato:number = 0;

  click(segno:string) {
    if (segno == "+") {
      this.risultato = parseInt(this.n1) + parseInt(this.n2);
    } else if (segno == "-") {
      this.risultato = parseInt(this.n1) - parseInt(this.n2);
    } else if (segno == "*") {
      this.risultato = parseInt(this.n1) * parseInt(this.n2);
    } else if (segno == "/") {
      this.risultato = parseInt(this.n1) / parseInt(this.n2);
    }
  }
}
