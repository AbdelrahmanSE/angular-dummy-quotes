import { AppStore } from './../store/AppStore.model';
import { Store } from '@ngrx/store';
import { Post } from "./Post.model";
import { PostsService } from "./posts.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postsService: PostsService, private store: Store<AppStore>) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.store.select('App').subscribe(store => {
      this.posts = store.posts;
    });
  }
}
