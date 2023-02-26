import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-game-select',
  templateUrl: './my-game-select.component.html',
  styleUrls: ['./my-game-select.component.css'],
})
export class MyGameSelectComponent {
  constructor(private router: Router) {}

  selectGame(market: any) {
    console.log(market, 'Market');
    this.router.navigate(['/mygame'], {
      queryParams: { market },
    });
  }
}
