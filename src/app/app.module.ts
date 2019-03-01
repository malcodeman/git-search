import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { LogoComponent } from "./logo/logo.component";
import { GithubService } from "./github.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent,
    HomeComponent,
    LogoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
