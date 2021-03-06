import {Injectable, OnInit} from '@angular/core';
import {User} from './models/user.model';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CommonService} from './common.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUser: User;

  private isAuthenticated = false;
  private authListener = new Subject<boolean>();

  private token: null;

  private sessionTimeout;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private router: Router
  ) {}

  getAuth(): boolean {
    return this.isAuthenticated;
  }

  getAuthListener(): Observable<boolean> {
    return this.authListener.asObservable();
  }

  getLoggedUser(): User {
    const {password, ...rest} = this.loggedUser;
    return {...rest};
  }

  getToken() {
    return this.token;
  }

  login(password, username= '', email= 'omar.allam@gmail.com') {
    if (!username && !email) { return; }
    const authData = {
      username: username,
      email: email,
      password: password,
    };
    this.http.post<any>(environment.API_URL + 'auth', authData)
      .subscribe(
        async response => {
          this.isAuthenticated = true;
          this.authListener.next(true);
          this.loggedUser = response.user;
          this.token = response.token;
          await this.commonService.showToast(response.message, 'hide');
          this.sessionTimeout = setTimeout(
            async () => {
              await this.logout();
            },
            parseInt(response.expiresIn) * 1000
            // 8000
          );
        },
        async response => {
          if(!response.error || !response.error.message) await this.logout("Unknown error occured");
          else await this.logout(response.error.message);
        });
  }

  async logout(message?) {
    this.isAuthenticated = false;
    this.authListener.next(false);
    this.loggedUser = null;
    this.token = null;
    await this.commonService.showToast(message ? message : 'Logged out', 'hide', message ? 'danger' : '');
    if (this.sessionTimeout) { clearTimeout(this.sessionTimeout); }
    await this.router.navigate(['/']);
  }



}
