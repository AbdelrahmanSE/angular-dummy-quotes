import { UpdateUsers, DeleteUser } from './../store/app.actions';
import { AppStore } from './../store/AppStore.model';
import { AppConfig } from "./../app.config";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(private httpClient: HttpClient, private store: Store<AppStore>) {}

  importUsers() {
    const request = this.httpClient.get<any[]>(AppConfig.REST_ROUTE + "/users");

    request.subscribe(users => {
      this.store.dispatch(new UpdateUsers(users));
    });

    return request;
  }

  deleteUser(userId: number) {
    const request = this.httpClient.delete(
      AppConfig.REST_ROUTE + "/user/" + userId
    );

    request.subscribe(res => {
      this.store.dispatch(new DeleteUser(userId));
    });

    return request;
  }
}
