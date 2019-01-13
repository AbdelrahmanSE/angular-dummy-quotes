import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from "./posts/posts.component";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from "./users/user/user.component";
import { PostComponent } from "./posts/post/post.component";
import { StoreModule } from "@ngrx/store";
import { AppReducers } from "./store/app.reducers";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ App: AppReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
