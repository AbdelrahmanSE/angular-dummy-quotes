import { AppStore } from "./AppStore.model";
import * as AppActions from "./app.actions";

const initialState = new AppStore();

export function AppReducers(store = initialState, action: AppActions.Actions) {
  switch (action.type) {
    case AppActions.UPDATE_POSTS:
      return {
        ...store,
        posts: action.posts
      };
    case AppActions.UPDATE_USERS:
      return {
        ...store,
        users: action.users
      };
    case AppActions.DELETE_POST:
      store.posts.splice(
        store.posts.findIndex(item => item.id === action.postId),
        1
      );
      return store;
    case AppActions.DELETE_USER:
      store.users.splice(
        store.users.findIndex(item => item.id === action.userId),
        1
      );
      return store;
    default:
      return store;
  }
}
