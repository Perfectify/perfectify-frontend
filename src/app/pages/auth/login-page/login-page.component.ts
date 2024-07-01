import {Component} from '@angular/core';
import {ContentContainerComponent} from "../../../components/display/content-container/content-container.component";
import {TitleLabelComponent} from "../../../components/display/label/title-label/title-label.component";
import {InputLabelComponent} from "../../../components/display/label/input-label/input-label.component";
import {TextInputComponent} from "../../../components/input/text-input/text-input.component";
import {IconComponent} from "../../../components/display/icon/icon.component";
import {ButtonInputComponent} from "../../../components/input/button-input/button-input.component";
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {CheckboxInputComponent} from "../../../components/input/checkbox-input/checkbox-input.component";
import {ContentSpacerComponent} from "../../../components/display/content-spacer/content-spacer.component";
import {Router, RouterLink} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {LoginData} from "../../../data-model/interfaces/auth/login-data";
import {UserCredential} from "@angular/fire/auth";
import {LoginError} from "../../../data-model/interfaces/auth/login-error";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ContentContainerComponent,
    TitleLabelComponent,
    InputLabelComponent,
    TextInputComponent,
    IconComponent,
    ButtonInputComponent,
    NgOptimizedImage,
    CheckboxInputComponent,
    NgClass,
    ContentSpacerComponent,
    RouterLink,
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  protected loginData: LoginData = {email: "", password: ""}

  /* Hold error data if loginError is undefined no error is present */
  protected loginError?: LoginError

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  protected performGoogleLogin() {
    this.handleLoginPromise(this.authenticationService.loginWithGoogleAccount())
  }

  protected performEmailPasswordLogin() {
    if (this.isLoginDataInvalid()) {
      this.loginError = {message: "Please enter valid email and password to login."}
    } else {
      this.handleLoginPromise(this.authenticationService.loginWithEmailAndPassword(this.loginData))
    }
  }

  private handleLoginPromise(loginPromise: Promise<UserCredential>): void {
    loginPromise.then(() => {
      this.router.navigate(["/dashboard"])
    }).catch(error => {
      this.loginError = {
        message: this.authenticationService.getErrorMessageByCode(error.code)
      }
    })
  }

  private isLoginDataInvalid(): boolean {
    return !this.loginData.email || !this.loginData.password
  }

}
