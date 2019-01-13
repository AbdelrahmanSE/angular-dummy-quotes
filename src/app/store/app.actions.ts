import { Post } from "./../posts/Post.model";
import { Action } from "@ngrx/store";

export const UPDATE_USERS = "UPDATE_USERS";
export const UPDATE_POSTS = "UPDATE_POSTS";
export const DELETE_USER = "DELETE_USER";
export const DELETE_POST = "DELETE_POST";

export class UpdateUsers implements Action {
  readonly type = UPDATE_USERS;
  constructor(public users: any[]) {}
}

export class UpdatePosts implements Action {
  readonly type = UPDATE_POSTS;
  constructor(public posts: Post[]) {}
}

export class UpdateUserPosts implements Action {
  readonly type = UPDATE_POSTS;
  constructor(public posts: Post[]) {}
}


export class DeleteUser implements Action {
  readonly type = DELETE_USER;
  constructor(public userId: number) {}
}

export class DeletePost implements Action {
  readonly type = DELETE_POST;
  constructor(public postId: number) {}
}

export type Actions = UpdateUsers | UpdatePosts | DeleteUser | DeletePost;
