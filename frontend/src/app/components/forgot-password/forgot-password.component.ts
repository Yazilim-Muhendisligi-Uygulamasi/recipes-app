import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form = {
    email: ''
  };
  isRequestFailed = false;
  isSuccessful=false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {

  }

  onSubmit(){
    const resetPasswordObserver = {
      next: () => {
        this.isRequestFailed = false;
        this.isSuccessful=true;
      },
      error: (err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
        this.isRequestFailed = true;
        this.isSuccessful=false;
      }
    };

    this.authService.requestResetPasswordLink(this.form.email).subscribe(resetPasswordObserver);
  }
}
