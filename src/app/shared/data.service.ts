import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getAccounts(): Observable<any> {
    return new Observable(observer => {
      if (! this.authService.getAuth()) {
        observer.next(null);
        return;
      }
      this.http.get<any>(environment.API_URL + 'data/accounts')
        .subscribe(
          response => {
            observer.next(response.accounts);
          },
          async response => {
            await this.authService.logout(response.error.message);
            observer.next(null);
            
          });
    });
  }

  getCards(): Observable<any> {
    return new Observable(observer => {
      if (! this.authService.getAuth()) {
        observer.next(null);
        return;
      }
      this.http.get<any>(environment.API_URL + 'data/cards')
        .subscribe(
          response => {
            observer.next(response.cards);
          },
          async response => {
            await this.authService.logout(response.error.message);
            observer.next(null);
            
          });
    });
  }

  getAccountDetails(id: string): Observable<any> {
    return new Observable(observer => {
      if (! this.authService.getAuth()) {
        observer.next(null);
        return;
      }
      this.http.get<any>(environment.API_URL + `data/accounts/${id}`)
        .subscribe(
          response => {
            observer.next(response.account);
          },
          async response => {
            await this.authService.logout(response.error.message);
            observer.next(null);
          });
    });
  }

  getCardDetails(id: string): Observable<any> {
    return new Observable(observer => {
      if (! this.authService.getAuth()) {
        observer.next(null);
        return;
      }
      this.http.get<any>(environment.API_URL + `data/cards/${id}`)
        .subscribe(
          response => {
            observer.next(response.card);
          },
          async response => {
            await this.authService.logout(response.error.message);
            observer.next(null);
          });
    });
  }
}
