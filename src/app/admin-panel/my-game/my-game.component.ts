import { Component } from '@angular/core';
import data from '../../services/game.json';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-my-game',
  templateUrl: './my-game.component.html',
  styleUrls: ['./my-game.component.css'],
})
export class MyGameComponent {
  jsonData: any;
  uid: string | null;
  walletAmount: number = 0;
  addedmoney: number = 0;
  updatedWallet: number = 0;
  BaharHaroof = [
    {
      number: 1,
      amount: '',
    },
    {
      number: 2,
      amount: '',
    },
    {
      number: 3,
      amount: '',
    },
    {
      number: 4,
      amount: '',
    },
    {
      number: 5,
      amount: '',
    },
    {
      number: 6,
      amount: '',
    },
    {
      number: 7,
      amount: '',
    },
    {
      number: 8,
      amount: '',
    },
    {
      number: 9,
      amount: '',
    },
    {
      number: 10,
      amount: '',
    },
  ];

  underHaroof = [
    {
      number: 1,
      amount: '',
    },
    {
      number: 2,
      amount: '',
    },
    {
      number: 3,
      amount: '',
    },
    {
      number: 4,
      amount: '',
    },
    {
      number: 5,
      amount: '',
    },
    {
      number: 6,
      amount: '',
    },
    {
      number: 7,
      amount: '',
    },
    {
      number: 8,
      amount: '',
    },
    {
      number: 9,
      amount: '',
    },
    {
      number: 10,
      amount: '',
    },
  ];
  selectedMarket: any;
  dbData: any = [];

  constructor(
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private service: GameService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.selectedMarket = params['market'];
      console.log(this.selectedMarket, 'SELECTEDMARKET');
      // this.dbData.market = this.selectedMarket;
    });
    this.uid = localStorage.getItem('userId');
    firebase
      .database()
      .ref('users/' + this.uid)
      .once('value', (snap) => {
        this.walletAmount = snap.val().walletAmount;
      });
  }

  ngOnInit() {
    this.jsonData = data;
    this.service.getData().subscribe((res) => {
      console.log(res, 'SUCESS YAAAY');
    });
  }

  valuechange(type: string, num: any, e: any, index: number) {
    if (type == 'standard') {
      if (this.walletAmount == 0) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.jsonData[index].amount = '';
      }
      let amount = e.target.value * 1;
      console.log(
        amount,
        'amount',
        this.walletAmount,
        'Wallet amount',
        'EEEEEEEE'
      );
      if (amount > this.walletAmount) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.jsonData[index].amount = '';
      } else {
        this.walletAmount = this.walletAmount - amount;
        this.addedmoney += amount;
        this.dbData.push({ num, amount });
        console.log(this.addedmoney, 'Added money');
        console.log(this.walletAmount, 'UPDATED VVAllet');
      }
    } else if (type == 'bahar') {
      if (this.walletAmount == 0) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.BaharHaroof[index].amount = '';
      }
      let amount = e.target.value * 1;
      console.log(
        amount,
        'amount',
        this.walletAmount,
        'Wallet amount',
        'EEEEEEEE'
      );
      if (amount > this.walletAmount) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.BaharHaroof[index].amount = '';
      } else {
        this.walletAmount = this.walletAmount - amount;
        this.addedmoney += amount;
        this.dbData.push({ num, amount, type: 'Bahar Haroof' });
        console.log(this.addedmoney, 'Added money');
        console.log(this.walletAmount, 'UPDATED VVAllet');
      }
    } else if (type == 'under') {
      if (this.walletAmount == 0) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.underHaroof[index].amount = '';
      }
      let amount = e.target.value * 1;
      console.log(
        amount,
        'amount',
        this.walletAmount,
        'Wallet amount',
        'EEEEEEEE'
      );
      if (amount > this.walletAmount) {
        this.toastr.error('Please Add money to your wallet to play game!');
        this.underHaroof[index].amount = '';
      } else {
        this.walletAmount = this.walletAmount - amount;
        this.addedmoney += amount;
        this.dbData.push({ num, amount, type: 'Under Haroof' });
        console.log(this.addedmoney, 'Added money');
        console.log(this.walletAmount, 'UPDATED VVAllet');
      }
    }
    console.log(this.dbData, 'FOREDASE');
  }

  updateWalletAmount() {
    //var usersRef = firebase.database().ref('users/' + this.uid);
    // usersRef.push({ walletAmount: this.walletAmount });
    //usersRef.ref.update({ walletAmount: this.walletAmount });
    //usersRef.child(this.uid).update({ walletAmount: this.walletAmount });
    // this.router.navigate(['/mywallet']);
  }

  playGame() {
    // var topUserPostsRef = firebase
    //   .database()
    //   .ref('mygame/' + this.uid)
    //   .orderByChild('market');

    // var postListRef = firebase.database().ref('mygame/' + this.uid);
    // var newPostRef = postListRef.push();
    // newPostRef.set({
    //   data: this.dbData,
    // });

    // firebase
    //   .database()
    //   .ref('mygame/' + this.uid)
    //   .update(
    //     {
    //       data: this.dbData,
    //     },
    //     (error) => {
    //       if (error) {
    //         this.toastr.error('Error');
    //       } else {
    //         this.toastr.success('Bet Amount set successfully ');
    //         this.router.navigate(['/mywallet']);
    //       }
    //     }
    //   );

    var user = firebase.auth().currentUser;
    var usersRef = firebase.database().ref('mygame/' + this.uid);
    // if (user) {
    usersRef.child(this.selectedMarket).push([this.dbData]);
    // }
  }
}
