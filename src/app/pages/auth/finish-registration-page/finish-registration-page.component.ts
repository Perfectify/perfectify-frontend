import {Component} from '@angular/core';
import {ContentContainerComponent} from "../../../components/display/content-container/content-container.component";
import {IconComponent} from "../../../components/display/icon/icon.component";
import {TitleLabelComponent} from "../../../components/display/label/title-label/title-label.component";
import {ContentSpacerComponent} from "../../../components/display/content-spacer/content-spacer.component";
import {InputLabelComponent} from "../../../components/display/label/input-label/input-label.component";
import {TextInputComponent} from "../../../components/input/text-input/text-input.component";
import {ButtonInputComponent} from "../../../components/input/button-input/button-input.component";
import {UserService} from "../../../services/user.service";
import {RegisterData, RegisterUserData} from "../../../data-model/interfaces/auth/register-data";
import {LoginError} from "../../../data-model/interfaces/auth/login-error";
import {RegisterError} from "../../../data-model/interfaces/auth/register-error";
import {Router} from "@angular/router";
import {ApiError} from "../../../data-model/interfaces/api/api-error";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-finish-registration-page',
  standalone: true,
  imports: [
    ContentContainerComponent,
    IconComponent,
    TitleLabelComponent,
    ContentSpacerComponent,
    InputLabelComponent,
    TextInputComponent,
    ButtonInputComponent,
    NgIf
  ],
  templateUrl: './finish-registration-page.component.html',
  styleUrl: './finish-registration-page.component.scss'
})
export class FinishRegistrationPageComponent {

  protected registerUserData: RegisterUserData = {firstName: "", lastName: ""}

  /* Hold error data if loginError is undefined no error is present */
  protected registerError?: RegisterError

  constructor(private userService: UserService, private router: Router) {
  }

  protected finishRegistration(): void {
    if (this.isLoginDataInvalid()) {
      this.registerError = {message: "First Name and Last Name are required!"}
    } else {
      this.userService.registerUser(this.registerUserData).then(() => {
        this.router.navigate(["/dashboard"])
      }).catch((error) => {
        const apiError = error.error as ApiError
        this.registerError = {message: apiError.message}
      })
    }
  }

  private isLoginDataInvalid(): boolean {
    return !this.registerUserData.firstName || !this.registerUserData.lastName
  }

}
