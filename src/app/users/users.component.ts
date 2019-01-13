import { AppStore } from "./../store/AppStore.model";
import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";
import { UsersService } from "./users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor(
    private usersService: UsersService,
    private store: Store<AppStore>
  ) {}

  ngOnInit() {
    this.usersService.importUsers();
    this.store.select("App").subscribe(store => {
      this.users = store.users;
    });
  }
}
