import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private mainURL =
    'https://ajay-bbdd1-default-rtdb.firebaseio.com/mygame.json';
  constructor(private http: HttpClient) {}

  updateData(data: any[]) {
    return this.http.put(this.mainURL, data).subscribe((res) => {
      console.log(res);
    });
  }

  getData() {
    return this.http.get(this.mainURL);
  }
}
