import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  showHeader = false;

  constructor(private router: Router) {}

  ngOninit() {
    // const { currentUser } = firebase.auth();
    // if (currentUser) {
    //   let uid = currentUser.uid;
    //   localStorage.setItem('userId', uid);
    //   localStorage.setItem('userData', JSON.stringify(currentUser));
    // }
    this.showHeader ? localStorage.getItem('uid') : false;
  }

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.clear();
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
