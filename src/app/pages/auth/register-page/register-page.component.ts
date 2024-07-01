import {Component} from '@angular/core';
import {ContentContainerComponent} from "../../../components/display/content-container/content-container.component";
import {TitleLabelComponent} from "../../../components/display/label/title-label/title-label.component";
import {ContentSpacerComponent} from "../../../components/display/content-spacer/content-spacer.component";
import {InputLabelComponent} from "../../../components/display/label/input-label/input-label.component";
import {TextInputComponent} from "../../../components/input/text-input/text-input.component";
import {ButtonInputComponent} from "../../../components/input/button-input/button-input.component";
import {Router, RouterLink} from "@angular/router";
import {IconComponent} from "../../../components/display/icon/icon.component";
import {RegisterData} from "../../../data-model/interfaces/auth/register-data";
import {RegisterError} from "../../../data-model/interfaces/auth/register-error";
import {AuthenticationService} from "../../../services/authentication.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    ContentContainerComponent,
    TitleLabelComponent,
    ContentSpacerComponent,
    InputLabelComponent,
    TextInputComponent,
    ButtonInputComponent,
    RouterLink,
    IconComponent,
    NgIf
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  protected registerData: RegisterData = {email: "", password: ""}

  /* Hold error data if registerError is undefined no error is present */
  protected registerError?: RegisterError

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  protected performEmailRegistration() {
    if (!this.isRegisterDataValid()) {
      this.registerError = {message: "Please enter valid email and password to login."}
    } else {
      this.authenticationService.registerWithEmailAndPassword(this.registerData).then(() => {
        this.router.navigate(["/auth/finish-registration"])
      }).catch(error => {
        this.registerError = {
          message: this.authenticationService.getErrorMessageByCode(error.code)
        }
      })
    }
  }

  private isRegisterDataValid(): boolean {
    return Object.values(this.registerData).every(value => value.trim() !== "")
  }

}
