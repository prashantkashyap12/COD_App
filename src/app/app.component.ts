import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from '../../environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'admin-panel';
  showHeader = false;

  constructor() {
    if (localStorage.getItem('userId')) {
      this.showHeader = true;
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }
  }

  ngOninit() {}
}
