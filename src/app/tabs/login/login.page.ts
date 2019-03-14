import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  isAuthenticated = false;
  private authSubs: Subscription;

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username_email: new FormControl(null, {
        validators: Validators.required,
      }),
      password: new FormControl(null, {
        validators: Validators.required,
      }),
    });

    this.isAuthenticated = this.authService.getAuth();
    if (this.isAuthenticated) { this.router.navigate(['accounts']); }
    this.authSubs = this.authService.getAuthListener().subscribe(auth => {
      if (auth) {
        this.router.navigate(['accounts']);
        this.isAuthenticated = auth;
      }
    });
  }

  ngOnDestroy(): void {
    this.authSubs.unsubscribe();
  }

  onLogin() {
    const userOrMail = this.form.get('username_email').value;
    if (userOrMail.includes('@')) {
      this.authService.login(this.form.get('password').value, '', userOrMail);
    } else {
      this.authService.login(this.form.get('password').value, userOrMail);
    }
  }


}
