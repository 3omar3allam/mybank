import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {TabsModule} from '../tabs/tabs.module';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: TabsModule,
})
export class DataService{

  user: User;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ){}

  getBrief(){
    this.user = this.authService.getLoggedUser();
    if(!this.user || this.authService.getAuth()) return;
    this.http.get<any>(environment.API_URL + 'accounts')
      .subscribe(
        response => {
          this.user.accounts = response.accounts;
        },
        response => {
          this.user = null;
        });
  }
}
