import { PostsService } from "src/app/posts/posts.service";
import { Post } from "./../Post.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() active: boolean;

  constructor(private postsService: PostsService) {}
  ngOnInit() {
    this.active = false;
  }

  toggle() {
    this.active = this.active ? false : true;
  }

  delete() {
    this.postsService.deletePost(this.post.id);
  }
}
