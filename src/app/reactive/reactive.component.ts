import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  reactive = new FormGroup({
    imie: new FormControl(''),
    nazwisko: new FormControl(''),
    email: new FormControl(''),
    kierunkowy: new FormControl(''),
    stacjonarny: new FormControl(''),
    wewn: new FormControl(''),
    komorkowy: new FormControl(''),
    odbiorca: new FormControl(''),
  });
  onSubmit() {
    console.log(this.reactive);
  }
}
