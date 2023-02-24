import { Component } from '@angular/core';
import { WindowService } from 'src/app/services/window.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { environment } from '../../../../environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css'],
})
export class AppLoginComponent {
  emailId: string = '';
  password: string = '';
  windowRef: any;

  constructor(
    private win: WindowService,
    public router: Router,
    public afAuth: AngularFireAuth,
    private toastr: ToastrService
  ) {
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }
  }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
  }

  SignIn() {
    return this.afAuth
      .signInWithEmailAndPassword(this.emailId, this.password)
      .then((result) => {
        this.toastr.success('Login successfull');
        const { currentUser } = firebase.auth();
        if (currentUser) {
          let uid = currentUser.uid;
          localStorage.setItem('userId', uid);
          localStorage.setItem('userData', JSON.stringify(currentUser));
        }
        this.router.navigate(['/mywallet']);
      })
      .catch((error) => {
        this.toastr.error(error.message);
      });
  }
}
