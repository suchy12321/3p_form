import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dane = {
    imie: '',
    nazwisko: '',
    email: '',
    kierunkowy: '',
    stacjonarny: '',
    wewn: '',
    komorkowy: '',
    odbiorca: '',
  };

  onSubmit() {
    if (this.dane.imie.length < 3) {
      alert('twoje imię jest dłuższe..');
    } else if (this.dane.nazwisko.length < 4) {
      alert('podałeś nieprawdziwe nazwisko');
    } else if (this.dane.komorkowy.length != 9) {
      alert('podałeś niepoprawny numer telefonu');
    } else {
      console.log(this.dane);
    }
  }
}
