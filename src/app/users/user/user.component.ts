import { Component, OnInit, Input } from "@angular/core";
import { PostsService } from "src/app/posts/posts.service";
import { UsersService } from "../users.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  @Input() user: any;

  constructor(
    private usersService: UsersService,
    private postsService: PostsService
  ) {}

  ngOnInit() {}

  getUserPosts(event: any) {
    if (event.srcElement.nodeName === "BUTTON") {
      return;
    }
    this.postsService.getUserPosts(this.user.id);
  }

  delete() {
    this.usersService.deleteUser(this.user.id);
  }
}
