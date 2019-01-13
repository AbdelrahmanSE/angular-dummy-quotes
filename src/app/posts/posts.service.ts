import { UpdatePosts, DeletePost } from "./../store/app.actions";
import { Store } from "@ngrx/store";
import { AppStore } from "./../store/AppStore.model";
import { Post } from "./Post.model";
import { AppConfig } from "./../app.config";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  posts: Post[];

  constructor(private httpClient: HttpClient, private store: Store<AppStore>) {}

  getPosts() {
    const request = this.httpClient.get<Post[]>(
      AppConfig.REST_ROUTE + "/posts"
    );

    request.subscribe((posts: Post[]) => {
      this.store.dispatch(new UpdatePosts(posts));
    });

    return request;
  }

  deletePost(postId: number) {
    const request = this.httpClient.delete<Post[]>(
      AppConfig.REST_ROUTE + "/posts/" + postId
    );

    request.subscribe(res => {
      this.store.dispatch(new DeletePost(postId));
    });

    return request;
  }

  getUserPosts(userId: number) {
    const request = this.httpClient.get<Post[]>(
      AppConfig.REST_ROUTE + "/posts?userId=" + userId
    );

    request.subscribe(posts => {
      this.store.dispatch(new UpdatePosts(posts));
    });

    return request;
  }
}
