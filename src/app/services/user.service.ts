import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {PerfectifyUser} from "../data-model/interfaces/user/perfectify-user";
import {firstValueFrom} from "rxjs";
import {RegisterUserData} from "../data-model/interfaces/auth/register-data";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  async getUser(): Promise<PerfectifyUser> {
    return firstValueFrom(this.httpClient.get<PerfectifyUser>(`${API_URL}/users/me`))
  }

  async registerUser(registerUserData: RegisterUserData): Promise<PerfectifyUser> {
    return firstValueFrom(this.httpClient.post<PerfectifyUser>(`${API_URL}/register`, {
      firstName: registerUserData.firstName,
      lastName: registerUserData.lastName,
    }))
  }

}
