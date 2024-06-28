import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {PerfectifyUser} from "../data-model/interfaces/user/perfectify-user";
import {firstValueFrom} from "rxjs";

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

}
