/*import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import { AuthService } from 'src/app/services/firebase.auth.service'*/
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd';
import * as Reducers from 'src/app/store/reducers'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'cui-system-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  logo: String
  form: FormGroup
 /* form: FormGroup
  logo: String
  authProvider: string = 'firebase'

  constructor(private fb: FormBuilder, public authService: AuthService, private store: Store<any>) {
    this.form = fb.group({
      email: ['admin@mediatec.org', [Validators.required, Validators.minLength(4)]],
      password: ['cleanui', [Validators.required]],
    })
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.logo = state.logo
    })
  }

  get email() {
    return this.form.controls.email
  }
  get password() {
    return this.form.controls.password
  }

  submitForm(): void {
    this.email.markAsDirty()
    this.email.updateValueAndValidity()
    this.password.markAsDirty()
    this.password.updateValueAndValidity()
    if (this.email.invalid || this.password.invalid) {
      return
    }
    this.authService.SignIn(this.email.value, this.password.value)
  }
  */

 constructor(private logService: AuthService, 
  private notification: NzNotificationService,
   private store: Store<any>,
   private formBuilder: FormBuilder,
  private router: Router) { 
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.logo = state.logo
    })
  }

    ngOnInit() {
      this.initForm()
    }

    initForm() {
      this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    onLogin(){
    this.logService.login(this.form.value).subscribe(resp =>{
    const jwt = resp.headers.get('Authorization')
    this.logService.saveToken(jwt)
    this.router.navigate(['advanced/tableau-bord'])
    },err=>{
    console.log(err)
    })
    }

    /*isAdmin(){
    return this.logService.isAdmin();
    }*/
    isUser(){
    return this.logService.isUser();
    }
}
